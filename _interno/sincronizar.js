// Copia os arquivos compartilhados para os 3 sites. Cada subdomínio só enxerga a própria pasta.
// Uso (na raiz do projeto): node _interno/sincronizar.js
const fs = require('fs');
const path = require('path');

const raiz = path.join(__dirname, '..');
const copias = [
  ['tecnico/css/base.css', ['graduacao/css/base.css', 'assets/css/base.css']],
  ['tecnico/js/lead-quiz.js', ['graduacao/js/lead-quiz.js', 'assets/js/lead-quiz.js']],
  ['tecnico/js/site.js', ['graduacao/js/site.js', 'assets/js/site.js']],
  ['tecnico/js/cursos-tecnicos-data.js', ['assets/js/cursos-tecnicos-data.js']],
  ['graduacao/js/graduacoes-data.js', ['assets/js/graduacoes-data.js']]
];

for (const [origem, destinos] of copias) {
  for (const destino of destinos) {
    fs.copyFileSync(path.join(raiz, origem), path.join(raiz, destino));
    console.log(`${origem} → ${destino}`);
  }
}
