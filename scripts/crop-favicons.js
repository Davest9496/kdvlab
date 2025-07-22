// crop-favicons.js
const sharp = require('sharp');

async function cropFavicons() {
  try {
    // Crop the 16x16 favicon
    await sharp('public/favicon/favicon-16x16.png')
      .trim() // Automatically removes transparent edges
      .resize(16, 16, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }, // Transparent background
      })
      .png({ quality: 100 })
      .toFile('public/favicon/favicon-16x16-cropped.png');

    // Crop the 32x32 favicon
    await sharp('public/favicon/favicon-32x32.png')
      .trim()
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png({ quality: 100 })
      .toFile('public/favicon/favicon-32x32-cropped.png');

    // Crop the 144x144 favicon
    await sharp('public/favicon/favicon-144x144.png')
      .trim()
      .resize(144, 144, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png({ quality: 100 })
      .toFile('public/favicon/favicon-144x144-cropped.png');

    console.log('✅ Cropped favicons created!');
    console.log(
      'Replace the original files with the cropped versions if they look better.'
    );
  } catch (error) {
    console.error('❌ Error cropping favicons:', error);
  }
}

cropFavicons();
