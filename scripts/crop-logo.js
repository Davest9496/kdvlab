// crop-vertical-logo.js
const sharp = require('sharp');

async function cropVerticalLogo() {
  try {
    const inputPath = 'public/images/Logo/Logo (Transparent Background).png';
    const outputPath = 'public/images/Logo/Logo-vertical-cropped.png';

    await sharp(inputPath)
      .trim() // Remove transparent padding
      .png({ quality: 100 })
      .toFile(outputPath);

    console.log('✅ Vertical logo cropped successfully!');

    // Show dimension comparison
    const originalMeta = await sharp(inputPath).metadata();
    const croppedMeta = await sharp(outputPath).metadata();

    console.log(`📏 Original: ${originalMeta.width}x${originalMeta.height}`);
    console.log(`📏 Cropped: ${croppedMeta.width}x${croppedMeta.height}`);
    console.log(`📁 Output: ${outputPath}`);
  } catch (error) {
    console.error('❌ Error:', error);

    if (
      !require('fs').existsSync(
        'public/images/Logo/Logo (Transparent Background).png'
      )
    ) {
      console.log('💡 File not found. Please check the path.');
    }
  }
}

cropVerticalLogo();
