// create-optimized-favicon.js
const sharp = require('sharp');

async function createOptimizedFavicons() {
  try {
    // Create a larger, more bold version for better visibility
    const baseImage = sharp('public/favicon/android-chrome-512x512.png');

    // Create optimized 32x32 (most important for browser tabs)
    await baseImage
      .clone()
      .resize(32, 32, {
        kernel: sharp.kernel.lanczos3,
        fit: 'cover',
      })
      .sharpen(1.5) // Add sharpening for clarity
      .modulate({
        brightness: 1.1, // Slightly brighter
        saturation: 1.2, // More saturated for visibility
      })
      .png({ quality: 100 })
      .toFile('public/favicon/favicon-32x32-optimized.png');

    // Create optimized 16x16
    await baseImage
      .clone()
      .resize(16, 16, {
        kernel: sharp.kernel.lanczos3,
        fit: 'cover',
      })
      .sharpen(2.0) // More sharpening for tiny size
      .modulate({
        brightness: 1.2,
        saturation: 1.3,
      })
      .png({ quality: 100 })
      .toFile('public/favicon/favicon-16x16-optimized.png');

    console.log('✅ Optimized favicons created!');
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

createOptimizedFavicons();
