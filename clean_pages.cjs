const fs = require('fs');
const path = require('path');

const dir = 'src/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(f => {
  const filePath = path.join(dir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace outer container to be a normal flex-grow container
  content = content.replace(/className="max-w-\[430px\] w-full mx-auto bg-surface relative overflow-hidden shadow-2xl flex flex-col"[^>]*>/g, 'className="w-full h-full flex flex-col relative overflow-hidden">');
  
  // Remove the bottom nav completely (it is now in AppShell)
  // We use a regex that matches from <nav id="main-bottom-nav" to </nav>
  // and we account for both single-line and multi-line.
  content = content.replace(/\{\/\*<!-- Material 3 Bottom Navigation Bar -->\*\/\}/g, '');
  content = content.replace(/\{\/\*<!-- Bottom Navigation -->\*\/\}/g, '');
  content = content.replace(/<nav id="main-bottom-nav"[\s\S]*?<\/nav>/g, '');
  
  fs.writeFileSync(filePath, content);
});

console.log('Cleaned up nested containers and duplicate nav bars in all pages.');
