// Reconstruit tw.css (les classes Tailwind utilisées dans index.html). À lancer après chaque modification de index.html :
//   node construire-css.js        (l'appli iPhone le fait aussi dans « npm run maj »)
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const inCss = path.join(__dirname, '.tw.in.css');
fs.writeFileSync(inCss, '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n');
try {
  execSync(`npx --yes tailwindcss@3.4.17 -c tailwind.config.js -i .tw.in.css -o tw.css --minify`, { cwd: __dirname, stdio: 'inherit' });
} finally {
  fs.rmSync(inCss, { force: true });
}
console.log('✔ tw.css à jour');
