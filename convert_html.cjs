const fs = require('fs');
const path = require('path');

const screensDir = process.env.SCREENS_DIR || path.join(__dirname, '..', 'BiteMatch_Screens');
const reactPagesDir = process.env.REACT_PAGES_DIR || path.join(__dirname, 'src', 'pages');

const files = [
    'Descubrir_CDMX',
    'Menu_Consistencia',
    'Menu_Interactivo',
    'Restaurante_Inmersivo',
    'Buscador_Filtros',
    'Colecciones',
    'Comunidad_Resenas',
    'Dejar_Resena',
    'Explorar_Mapa',
    'Login',
    'Matches_Guardados',
    'Notificaciones',
    'Onboarding',
    'Perfil_Usuario',
    'Preferencias_Setup',
    'Reservacion_Flow',
    'Ruleta_Aleatoria',
    'Seleccionar_Ubicacion',
    'Splash',
    'Ubicacion_Restaurante'
];

function toKebabCase(str) {
    return str.toLowerCase().replace(/_/g, '-');
}

files.forEach(file => {
    const htmlPath = path.join(screensDir, `${file}.html`);
    const jsxPath = path.join(reactPagesDir, `${file}.jsx`);
    
    if (!fs.existsSync(htmlPath)) {
        console.warn(`File not found: ${htmlPath}`);
        return;
    }
    
    let content = fs.readFileSync(htmlPath, 'utf8');
    
    // Extract body content
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let bodyContent = bodyMatch ? bodyMatch[1] : content;
    
    // Strip <script> tags
    bodyContent = bodyContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    
    // Basic JSX conversions
    bodyContent = bodyContent
        .replace(/class="/g, 'className="')
        .replace(/onclick="[^"]*"/gi, 'onClick={() => {}}')
        .replace(/tabindex="/gi, 'tabIndex="')
        .replace(/stroke-width="/gi, 'strokeWidth="')
        .replace(/stroke-linecap="/gi, 'strokeLinecap="')
        .replace(/stroke-linejoin="/gi, 'strokeLinejoin="')
        .replace(/fill-rule="/gi, 'fillRule="')
        .replace(/clip-rule="/gi, 'clipRule="')
        .replace(/viewbox="/gi, 'viewBox="')
        .replace(/for="/gi, 'htmlFor="')
        .replace(/<!--[\s\S]*?-->/g, '{/*$&*/}'); // comments
        
    // Close void tags: img, input, hr, br
    bodyContent = bodyContent.replace(/<(img|input|hr|br)([^>]*?)(?<!\/)>/gi, '<$1$2 />');
    
    // Convert style="width: 50%" to style={{width: '50%'}}
    bodyContent = bodyContent.replace(/style="([^"]+)"/g, (match, styleStr) => {
        const rules = styleStr.split(';').filter(s => s.trim().length > 0);
        const obj = {};
        rules.forEach(rule => {
            const parts = rule.split(':');
            if (parts.length === 2) {
                let key = parts[0].trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                let val = parts[1].trim();
                obj[key] = val;
            }
        });
        return `style={${JSON.stringify(obj)}}`;
    });
    
    // Convert a href="File.html" to Link to="/file"
    bodyContent = bodyContent.replace(/<a\s+([^>]*?)href="([^"]+?\.html)"([^>]*)>/gi, (match, before, link, after) => {
        let route = link.replace('.html', '').toLowerCase().replace(/_/g, '-');
        return `<Link ${before}to="/${route}"${after}>`;
    }).replace(/<\/a>/gi, '</Link>');

    // Create JSX wrapper
    const jsxContent = `import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ${file}() {
  const navigate = useNavigate();
  
  return (
    <>
${bodyContent}
    </>
  );
}
`;

    fs.writeFileSync(jsxPath, jsxContent, 'utf8');
    console.log(`Converted ${file}`);
});
