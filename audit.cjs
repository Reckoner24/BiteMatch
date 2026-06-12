const fs = require('fs');
const path = require('path');
const dir = './src/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

console.log("--- MISSING ONCLICK AUDIT ---");
files.forEach(file => {
  const code = fs.readFileSync(path.join(dir, file), 'utf8');
  const lines = code.split('\n');
  lines.forEach((line, i) => {
    if (line.includes('onClick={() => {}}')) {
      console.log(`${file}:${i+1} - Empty onClick`);
    } else if (line.includes('<button') && !line.includes('onClick')) {
      console.log(`${file}:${i+1} - Missing onClick on <button>`);
    } else if (line.includes('cursor-pointer') && !line.includes('onClick')) {
      console.log(`${file}:${i+1} - Missing onClick on cursor-pointer element`);
    }
  });
});
