// File: generator.js
const fs = require('fs');
const path = require('path');

const imagesFolder = path.join(__dirname, 'images');
let imagesObj = {};

fs.watch(imagesFolder, (eventType, filename) => {
  if (eventType === 'rename' && filename) {
    // Перевіряємо, що файл реально існує (новий)
    const filePath = path.join(imagesFolder, filename);
    if (fs.existsSync(filePath)) {
      const key = path.parse(filename).name.toLowerCase();
      imagesObj[key] = `images/${filename.toLowerCase()}`;
      console.log(`${key}: "${imagesObj[key]}",`);
    }
  }
});
