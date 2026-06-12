const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'Pitch_BiteMatch.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Add import
content = content.replace("import { Link } from 'react-router-dom';", "import { Link } from 'react-router-dom';\nimport { HeroSwipeMockup, FeatureSwipeDemo, FeatureRouletteDemo } from './PitchComponents';");

// 2. Hero Mockup
content = content.replace(/<div className="relative w-\[300px\].*?App Preview" \/>\s*<div className="absolute inset-0 bg-gradient-to-t.*?<\/div>\s*<\/div>\s*\{\/\* Floating elements \*\/\}\s*<div className="absolute top-1\/4.*?Match Perfecto<\/p>\s*<\/div>\s*<\/div>/gs, "<HeroSwipeMockup />");

// 3. Feature 1 Swipe
content = content.replace(/<div className="bg-gradient-to-br from-\[#ab3500\] to-\[#ff5964\] p-1\.5 rounded-\[2\.5rem\].*?pitchSwipeRight\(\)"\}\)>\s*<span className="material-symbols-outlined text-2xl fill">favorite<\/span>\s*<\/button>\s*<\/div>\s*<\/div>\s*<\/div>/gs, "<FeatureSwipeDemo />");

// 4. Feature 3 Gamification
content = content.replace(/\{\/\* Fake Roulette UI Container \*\/\}\s*<div className="relative flex items-center justify-center w-\[300px\] h-\[300px\].*?Match Sorpresa: <span id="ruleta-winner" className="text-\[#2d1610\]"><\/span>\s*<\/span>\s*<\/div>\s*<\/div>/gs, "<FeatureRouletteDemo />");

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Pitch_BiteMatch patched successfully.');
