// Prépare www/ pour l'appli iPhone : l'appli web du dossier parent, avec tout ce qu'elle charge
// d'Internet (Tailwind, Leaflet, MapLibre) embarqué dans l'appli, pour qu'elle marche sans réseau.
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const src = path.join(__dirname, '..');
const dst = path.join(__dirname, 'www');
const nm = path.join(__dirname, 'node_modules');
fs.rmSync(dst, { recursive: true, force: true });
fs.mkdirSync(path.join(dst, 'lib'), { recursive: true });
for (const f of ['manifest.json', 'icon.svg', 'icon-192.png', 'icon-512.png']) fs.copyFileSync(path.join(src, f), path.join(dst, f));

let html = fs.readFileSync(path.join(src, 'index.html'), 'utf8');
const swap = (a, b) => {
  if (!html.includes(a)) throw new Error('Introuvable dans index.html : ' + a.slice(0, 60));
  html = html.split(a).join(b);
};

// 1. Tailwind : la feuille est reconstruite directement dans www/ (jamais dans le dépôt, sinon « git pull » se bloque)
fs.writeFileSync(path.join(__dirname, '.tw.in.css'), '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n');
execSync(`npx tailwindcss -c ${JSON.stringify(path.join(src, 'tailwind.config.js'))} -i .tw.in.css -o ${JSON.stringify(path.join(dst, 'tw.css'))} --minify`, { cwd: __dirname, stdio: 'inherit' });
fs.rmSync(path.join(__dirname, '.tw.in.css'));

// 2. Leaflet et MapLibre : copiés depuis node_modules
fs.cpSync(path.join(nm, 'leaflet', 'dist'), path.join(dst, 'lib', 'leaflet'), { recursive: true });
fs.copyFileSync(path.join(nm, 'maplibre-gl', 'dist', 'maplibre-gl.js'), path.join(dst, 'lib', 'maplibre-gl.js'));
fs.copyFileSync(path.join(nm, 'maplibre-gl', 'dist', 'maplibre-gl.css'), path.join(dst, 'lib', 'maplibre-gl.css'));
swap('https://unpkg.com/leaflet@1.9.4/dist/leaflet.css', 'lib/leaflet/leaflet.css');
swap('https://unpkg.com/leaflet@1.9.4/dist/leaflet.js', 'lib/leaflet/leaflet.js');
swap("const LIB = 'https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl';", "const LIB = 'lib/maplibre-gl';");

fs.writeFileSync(path.join(dst, 'index.html'), html);
console.log('✔ Appli web prête dans iphone/www (Tailwind, Leaflet et MapLibre embarqués)');
