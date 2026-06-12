const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../BiteMatch_Screens');
const destDir = path.join(__dirname, 'src', 'pages');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.html'));

let routeImports = '';
let routeDefs = '';

files.forEach(file => {
    const componentName = file.replace('.html', '');
    const content = fs.readFileSync(path.join(srcDir, file), 'utf-8');

    // Extract body content
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let bodyContent = bodyMatch ? bodyMatch[1] : content;

    // Remove <script> and <style> tags completely
    bodyContent = bodyContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    bodyContent = bodyContent.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');

    // Replace HTML comments with JSX comments
    bodyContent = bodyContent.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

    // Fix malformed classes in some files (Splash and Ruleta)
    // Splash.html: <div class="..." style="..." shadow-2xl flex flex-col items-center justify-center">
    // Make sure we don't have duplicate className, just append it to the original class.
    // Let's just remove the dangling attributes for simplicity, or we can just replace the whole tag
    bodyContent = bodyContent.replace(/<div class="max-w-\[400px\] w-full mx-auto bg-primary relative overflow-hidden" style="height: 100dvh; max-height: 100%;" shadow-2xl flex flex-col items-center justify-center">/g, '<div className="max-w-[400px] w-full mx-auto bg-primary relative overflow-hidden shadow-2xl flex flex-col items-center justify-center" style={{ height: "100dvh", maxHeight: "100%" }}>');
    
    bodyContent = bodyContent.replace(/<div class="max-w-\[400px\] w-full mx-auto bg-surface relative overflow-hidden" style="height: 100dvh; max-height: 100%;" shadow-2xl flex flex-col items-center">/g, '<div className="max-w-[400px] w-full mx-auto bg-surface relative overflow-hidden shadow-2xl flex flex-col items-center" style={{ height: "100dvh", maxHeight: "100%" }}>');

    // Common React replacements
    bodyContent = bodyContent.replace(/class=/g, 'className=');
    bodyContent = bodyContent.replace(/for=/g, 'htmlFor=');
    
    // Replace SVG specific attributes that cause errors in React
    bodyContent = bodyContent.replace(/stroke-width=/g, 'strokeWidth=');
    bodyContent = bodyContent.replace(/stroke-linecap=/g, 'strokeLinecap=');
    bodyContent = bodyContent.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
    bodyContent = bodyContent.replace(/fill-rule=/g, 'fillRule=');
    bodyContent = bodyContent.replace(/clip-rule=/g, 'clipRule=');

    // Remove inline event handlers
    bodyContent = bodyContent.replace(/onclick="([^"]*)"/g, 'onClick={() => { console.log("$1") }}');
    bodyContent = bodyContent.replace(/onsubmit="([^"]*)"/g, 'onSubmit={(e) => { e.preventDefault(); console.log("$1") }}');
    bodyContent = bodyContent.replace(/oninput="([^"]*)"/g, 'onChange={(e) => { console.log("$1") }}');

    // React router Links
    bodyContent = bodyContent.replace(/<a([^>]*)href="([^"]+)\.html"([^>]*)>/g, '<Link$1to="/$2"$3>');
    bodyContent = bodyContent.replace(/<a([^>]*)href="([^"]+)"([^>]*)>/g, '<Link$1to="$2"$3>');
    bodyContent = bodyContent.replace(/<\/a>/g, '</Link>');

    // Self closing tags fix
    bodyContent = bodyContent.replace(/<img([^>]+?)(?<!\/)>/g, '<img$1 />');
    bodyContent = bodyContent.replace(/<input([^>]+?)(?<!\/)>/g, '<input$1 />');
    bodyContent = bodyContent.replace(/<hr([^>]*?)(?<!\/)>/g, '<hr$1 />');
    bodyContent = bodyContent.replace(/<br([^>]*?)(?<!\/)>/g, '<br$1 />');
    bodyContent = bodyContent.replace(/<source([^>]*?)(?<!\/)>/g, '<source$1 />');

    // Style attributes in React
    bodyContent = bodyContent.replace(/style="([^"]*)"/g, (match, styles) => {
        const objStr = styles.split(';')
            .filter(s => s.trim())
            .map(s => {
                const [k, v] = s.split(':');
                if(!k || !v) return '';
                const camelK = k.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
                return `${camelK}: '${v.trim().replace(/'/g, "\\'")}'`;
            }).join(', ');
        return `style={{ ${objStr} }}`;
    });

    const jsxContent = `import React from 'react';\nimport { Link } from 'react-router-dom';\n\nexport default function ${componentName}() {\n  return (\n    <>\n      ${bodyContent}\n    </>\n  );\n}\n`;

    fs.writeFileSync(path.join(destDir, `${componentName}.jsx`), jsxContent);

    // Routes
    routeImports += `import ${componentName} from './pages/${componentName}';\n`;
    routeDefs += `        <Route path="/${componentName}" element={<${componentName} />} />\n`;
    if (componentName === 'Pitch_BiteMatch') {
        routeDefs += `        <Route path="/" element={<${componentName} />} />\n`;
    }
});

const appContent = `import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
${routeImports}

function App() {
  return (
    <div className="font-['Plus_Jakarta_Sans'] text-[#594139] bg-[#fbf8f7] min-h-screen">
      <BrowserRouter>
        <Routes>
${routeDefs}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
`;

fs.writeFileSync(path.join(__dirname, 'src', 'App.jsx'), appContent);
console.log('Migration complete!');
