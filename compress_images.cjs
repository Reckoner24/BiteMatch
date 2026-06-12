const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'assets', 'images');

fs.readdir(dir, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        if (file.endsWith('.jpg') || file.endsWith('.png')) {
            const filePath = path.join(dir, file);
            const tempPath = path.join(dir, 'temp_' + file);
            
            sharp(filePath)
                .resize({ width: 800, withoutEnlargement: true })
                .jpeg({ quality: 60, progressive: true })
                .toFile(tempPath)
                .then(() => {
                    fs.renameSync(tempPath, filePath);
                    console.log(`Compressed: ${file}`);
                })
                .catch(err => {
                    console.error(`Error compressing ${file}:`, err);
                });
        }
    });
});
