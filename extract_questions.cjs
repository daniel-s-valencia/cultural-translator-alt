const fs = require('fs');

const content = fs.readFileSync('typeform_raw.json', 'utf8');
const questions = [];
const matches = content.match(/"title":"([^"]+)"/g);

if (matches) {
  matches.forEach(m => {
    const title = m.replace(/"title":"/g, '').replace(/"$/g, '');
    if (title.length > 20 && !title.includes('Welcome') && !title.includes('Thanks for')) {
      questions.push(title);
    }
  });
}

console.log(questions.map((q, i) => `${i + 1}. ${q}`).join('\n'));
