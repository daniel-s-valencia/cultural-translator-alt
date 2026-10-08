const fs = require('fs');

const content = fs.readFileSync('/Users/celestial/.gemini/antigravity/brain/d386aec4-d5bc-462c-adda-348c17bb1bbf/.system_generated/steps/69/content.md', 'utf8');

// Looking for Typeform's embedded state
let match = content.match(/window\.__INITIAL_STATE__\s*=\s*(\{.*?\});/);
if (!match) {
  match = content.match(/<script id="__NEXT_DATA__" type="application\/json">(.*?)<\/script>/);
}
if (!match) {
  // Let's just try to find JSON that contains the word "title" or "properties"
  console.log("No specific state object found. Trying broad regex...");
  const jsonMatches = content.match(/\{.*?"title":.*?\}/g);
  if (jsonMatches) {
    fs.writeFileSync('typeform_raw.json', jsonMatches.join('\n'));
    console.log("Dumped JSON matches to typeform_raw.json");
  } else {
    console.log("Could not extract state.");
  }
} else {
  try {
    const data = JSON.parse(match[1]);
    fs.writeFileSync('typeform_data.json', JSON.stringify(data, null, 2));
    console.log("Successfully extracted Typeform data.");
  } catch (e) {
    console.log("Found match but failed to parse JSON:", e);
    fs.writeFileSync('typeform_raw.json', match[1]);
  }
}
