#!/usr/bin/env node

/**
 * Logo Cropping and Optimization Script
 *
 * This script automatically:
 * 1. Crops whitespace from PNG logos
 * 2. Standardizes dimensions for consistent display
 * 3. Optimizes file sizes for web performance
 * 4. Creates multiple sizes for responsive images
 *
 * Requirements: npm install sharp
 *
 * Usage: node scripts/crop-logos.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration for logo processing
const CONFIG = {
  // Input and output directories
  inputDir: './public/images/Logo/organisations',
  outputDir: './public/images/Logo/organisations/processed',

  // Logo specifications for consistent branding
  logoSpecs: {
    // Standard sizes for responsive display
    sizes: [
      { name: 'sm', width: 120, height: 60 }, // Mobile
      { name: 'md', width: 160, height: 80 }, // Tablet
      { name: 'lg', width: 200, height: 100 }, // Desktop
      { name: 'xl', width: 240, height: 120 }, // High-res displays
    ],

    // Quality and optimization settings
    quality: 90,
    compressionLevel: 6,

    // Cropping and padding settings
    trimTolerance: 10, // Sensitivity for whitespace detection
    paddingPercent: 5, // Add small padding after cropping (5% of width/height)

    // Background for consistency (transparent maintained)
    backgroundColor: { r: 0, g: 0, b: 0, alpha: 0 },

    // Contrast and brightness adjustments for dark theme
    brightness: 1.1, // Slightly brighter for dark backgrounds
    contrast: 1.2, // Enhanced contrast
    saturation: 1.1, // Slightly more saturated
  },

  // File naming conventions
  naming: {
    suffix: '_processed',
    formats: ['png', 'webp', 'avif'], // Multiple formats for optimal performance
  },
};

/**
 * Enhanced logo processing with smart cropping
 */
class LogoProcessor {
  constructor(config) {
    this.config = config;
    this.processedCount = 0;
    this.errors = [];
  }

  /**
   * Main processing function
   */
  async processAllLogos() {
    console.log('🎨 Starting logo cropping and optimization...\n');

    // Ensure output directory exists
    await this.ensureOutputDir();

    // Get all PNG files from input directory
    const logoFiles = this.getLogoFiles();

    if (logoFiles.length === 0) {
      console.log('❌ No PNG files found in:', this.config.inputDir);
      return;
    }

    console.log(`📁 Found ${logoFiles.length} logo files to process:\n`);
    logoFiles.forEach(file => console.log(`   • ${file}`));
    console.log('');

    // Process each logo
    for (const file of logoFiles) {
      await this.processLogo(file);
    }

    // Summary
    this.printSummary();
  }

  /**
   * Process individual logo with smart cropping
   */
  async processLogo(filename) {
    const inputPath = path.join(this.config.inputDir, filename);
    const baseName = path.parse(filename).name;

    console.log(`🔄 Processing: ${filename}`);

    try {
      // Load and analyze the image
      const image = sharp(inputPath);
      const metadata = await image.metadata();

      console.log(`   📊 Original: ${metadata.width}x${metadata.height}px`);

      // Step 1: Smart crop to remove whitespace
      const trimmed = await this.smartCrop(image);
      const trimmedMetadata = await trimmed.metadata();

      console.log(
        `   ✂️  Cropped:  ${trimmedMetadata.width}x${trimmedMetadata.height}px`
      );

      // Step 2: Create multiple optimized sizes
      await this.createOptimizedSizes(trimmed, baseName);

      this.processedCount++;
      console.log(`   ✅ Completed: ${filename}\n`);
    } catch (error) {
      console.error(`   ❌ Error processing ${filename}:`, error.message);
      this.errors.push({ file: filename, error: error.message });
    }
  }

  /**
   * Smart cropping algorithm
   */
  async smartCrop(image) {
    const { trimTolerance, paddingPercent } = this.config.logoSpecs;

    // First, trim the whitespace aggressively
    let trimmed = image.trim({
      background: { r: 255, g: 255, b: 255, alpha: 0 },
      threshold: trimTolerance,
    });

    // Get dimensions after trimming
    const metadata = await trimmed.metadata();

    // Add small padding to prevent logos from being too tight
    const paddingX = Math.round(metadata.width * (paddingPercent / 100));
    const paddingY = Math.round(metadata.height * (paddingPercent / 100));

    // Extend with transparent padding
    trimmed = trimmed.extend({
      top: paddingY,
      bottom: paddingY,
      left: paddingX,
      right: paddingX,
      background: this.config.logoSpecs.backgroundColor,
    });

    return trimmed;
  }

  /**
   * Create multiple optimized sizes and formats
   */
  async createOptimizedSizes(image, baseName) {
    const { sizes, quality, brightness, contrast, saturation } =
      this.config.logoSpecs;

    for (const size of sizes) {
      // Resize with proper aspect ratio handling
      let resized = image
        .clone()
        .resize(size.width, size.height, {
          fit: 'inside', // Maintain aspect ratio
          withoutEnlargement: false, // Allow enlargement for small logos
          background: this.config.logoSpecs.backgroundColor,
        })
        // Enhance for dark theme display
        .modulate({
          brightness: brightness,
          saturation: saturation,
        })
        .linear(contrast, -(128 * contrast) + 128); // Contrast adjustment

      // Create different formats for optimal performance
      for (const format of this.config.naming.formats) {
        const outputName = `${baseName}_${size.name}.${format}`;
        const outputPath = path.join(this.config.outputDir, outputName);

        try {
          if (format === 'png') {
            await resized
              .png({
                compressionLevel: this.config.logoSpecs.compressionLevel,
                quality: quality,
                progressive: true,
              })
              .toFile(outputPath);
          } else if (format === 'webp') {
            await resized
              .webp({
                quality: quality,
                effort: 4, // Good balance of compression/speed
              })
              .toFile(outputPath);
          } else if (format === 'avif') {
            await resized
              .avif({
                quality: quality,
                effort: 4,
              })
              .toFile(outputPath);
          }

          console.log(`     💾 Saved: ${outputName}`);
        } catch (error) {
          console.error(`     ❌ Failed to save ${outputName}:`, error.message);
        }
      }
    }
  }

  /**
   * Utility functions
   */
  async ensureOutputDir() {
    if (!fs.existsSync(this.config.outputDir)) {
      fs.mkdirSync(this.config.outputDir, { recursive: true });
      console.log(`📁 Created output directory: ${this.config.outputDir}\n`);
    }
  }

  getLogoFiles() {
    if (!fs.existsSync(this.config.inputDir)) {
      console.error(`❌ Input directory not found: ${this.config.inputDir}`);
      return [];
    }

    return fs
      .readdirSync(this.config.inputDir)
      .filter(file => file.toLowerCase().endsWith('.png'))
      .sort();
  }

  printSummary() {
    console.log('═'.repeat(60));
    console.log('📊 PROCESSING SUMMARY');
    console.log('═'.repeat(60));
    console.log(`✅ Successfully processed: ${this.processedCount} logos`);
    console.log(`📁 Output directory: ${this.config.outputDir}`);

    if (this.errors.length > 0) {
      console.log(`❌ Errors: ${this.errors.length}`);
      this.errors.forEach(({ file, error }) => {
        console.log(`   • ${file}: ${error}`);
      });
    }

    console.log('\n🎯 NEXT STEPS:');
    console.log('1. Review the processed logos in the output directory');
    console.log('2. Update your React component to use the new logo paths');
    console.log('3. Test the logos on your website');
    console.log(
      '4. Consider using the WebP/AVIF versions for better performance'
    );
    console.log('\n✨ Logo optimization complete!');
  }
}

/**
 * Generate updated React component code
 */
function generateUpdatedComponent() {
  const updatedClientData = `
// Updated client logos data with optimized, cropped logos
const clients: Client[] = [
  {
    id: 'hootscope',
    name: 'Hootscope',
    logo: '/images/Logo/organisations/processed/Hootscope Logo (Transparent Background)_lg.webp',
    logoAlt: 'Hootscope company logo - social media management platform',
    logoWidth: 200,
    logoHeight: 100,
  },
  {
    id: 'kdvwears',
    name: 'KDVwears',
    logo: '/images/Logo/organisations/processed/KDVwears Logo (Transparent Account)_lg.webp',
    logoAlt: 'KDVwears company logo - fashion and apparel brand',
    logoWidth: 200,
    logoHeight: 100,
  },
  {
    id: 'mophire',
    name: 'MOPHIRE',
    logo: '/images/Logo/organisations/processed/MOPHIRE Logo (Transparent Background)_lg.webp',
    logoAlt: 'MOPHIRE company logo - technology solutions provider',
    logoWidth: 200,
    logoHeight: 100,
  },
  {
    id: 'shutrlink',
    name: 'SHUTRLINK',
    logo: '/images/Logo/organisations/processed/SHUTRLINK Logo (Transparent Background)_lg.webp',
    logoAlt: 'SHUTRLINK company logo - digital connectivity platform',
    logoWidth: 200,
    logoHeight: 100,
  },
  {
    id: 'smartdesk',
    name: 'Smartdesk',
    logo: '/images/Logo/organisations/processed/Smartdesk (Transparent Background)_lg.webp',
    logoAlt: 'Smartdesk company logo - smart workspace solutions',
    logoWidth: 200,
    logoHeight: 100,
  },
];`;

  console.log('\n📝 UPDATED REACT COMPONENT CODE:');
  console.log('═'.repeat(60));
  console.log(updatedClientData);
}

// Main execution
async function main() {
  try {
    const processor = new LogoProcessor(CONFIG);
    await processor.processAllLogos();
    generateUpdatedComponent();
  } catch (error) {
    console.error('💥 Fatal error:', error.message);
    process.exit(1);
  }
}

// Export for potential module usage
module.exports = { LogoProcessor, CONFIG };

// Run if called directly
if (require.main === module) {
  main();
}
