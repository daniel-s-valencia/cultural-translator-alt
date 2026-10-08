const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
pkg.scripts.build = "astro build --remote && mv dist/client/* dist/ && echo \"export { default } from './server/entry.mjs';\" > dist/_worker.js";
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
