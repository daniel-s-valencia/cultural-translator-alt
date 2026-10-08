const fs = require('fs');

function extractText(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  // Simple regex to extract text between HTML tags
  const textMatches = content.match(/>([^<]+)</g);
  if (!textMatches) return '';
  
  return textMatches
    .map(t => t.replace(/[><]/g, '').trim())
    .filter(t => t.length > 20 && !t.includes('{') && !t.includes('}'))
    .join('\n\n');
}

const ctText = extractText('/Users/celestial/.gemini/antigravity/brain/d386aec4-d5bc-462c-adda-348c17bb1bbf/.system_generated/steps/4/content.md');
const rtText = extractText('/Users/celestial/.gemini/antigravity/brain/d386aec4-d5bc-462c-adda-348c17bb1bbf/.system_generated/steps/5/content.md');

fs.writeFileSync('extracted_ct.txt', ctText);
fs.writeFileSync('extracted_rt.txt', rtText);
console.log('Extraction complete');
