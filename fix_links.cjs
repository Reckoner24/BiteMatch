const fs = require('fs');
const path = require('path');

const dir = 'src/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(f => {
  const filePath = path.join(dir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace missing lowercase routing to PascalCase exact route names defined in App.jsx
  content = content.replace(/\/descubrir-cdmx/g, '/Descubrir_CDMX');
  content = content.replace(/\/explorar-mapa/g, '/Explorar_Mapa');
  content = content.replace(/\/matches-guardados/g, '/Matches_Guardados');
  content = content.replace(/\/perfil-usuario/g, '/Perfil_Usuario');
  content = content.replace(/\/menu-consistencia/g, '/Menu_Consistencia');
  content = content.replace(/\/seleccionar-ubicacion/g, '/Seleccionar_Ubicacion');
  content = content.replace(/\/buscador-filtros/g, '/Buscador_Filtros');
  content = content.replace(/\/comunidad-resenas/g, '/Comunidad_Resenas');
  content = content.replace(/\/reservacion-flow/g, '/Reservacion_Flow');
  content = content.replace(/\/restaurante-inmersivo/g, '/Restaurante_Inmersivo');
  content = content.replace(/\/ubicacion-restaurante/g, '/Ubicacion_Restaurante');
  
  fs.writeFileSync(filePath, content);
});

console.log('Fixed routing links across all files');
