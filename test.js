// load the module
const HttpCodeTranslator = require('./index.js');

// current support language is English and Chinese
const codeTranslator = new HttpCodeTranslator('en');

// load language manually
// Language code is ISO 639-1
codeTranslator.loadLanguage('zh');
// or load the translation map
codeTranslator.loadTranslation({
  // must have a default value when code not found
  defaultValue: 'Unknown value',
  200: 'OK',
});

// translate code
console.log(codeTranslator.translate(200));   // OK
console.log(codeTranslator.translate("200")); // OK
console.log(codeTranslator.translate("299")); // Unkonw value

// Set default value
codeTranslator.setDefaultValue("The code is unknown");
console.log(codeTranslator.translate("299")); // The code is unknown