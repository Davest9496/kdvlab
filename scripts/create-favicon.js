const sharp = require('sharp');

sharp('public/favicon/android-chrome-192x192.png')
  .resize(144, 144)
  .png()
  .toFile('public/favicon/favicon-144x144.png')
  .then(() => console.log('144x144 favicon created!'))
  .catch(err => console.error(err));
