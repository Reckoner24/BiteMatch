const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src', 'pages');

const exclude = ['Descubrir_CDMX.jsx', 'PitchComponents.jsx', 'Menu_Consistencia.jsx', 'Reservacion_Flow.jsx'];

fs.readdirSync(dir).forEach(file => {
    if (file.endsWith('.jsx') && !exclude.includes(file)) {
        let content = fs.readFileSync(path.join(dir, file), 'utf8');
        let modified = false;
        
        const newContent = content.replace(/<img\b([^>]*)>/g, (match, p1) => {
            if (p1.includes('loading=')) return match;
            modified = true;
            return `<img loading="lazy"${p1}>`;
        });
        
        if (modified) {
            fs.writeFileSync(path.join(dir, file), newContent);
            console.log(`Updated ${file}`);
        }
    }
});
