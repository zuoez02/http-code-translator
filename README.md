# Http code translator

Translate http code into your languange.

## Install

```bash
npm install --save http-code-translator
```
or
```bash
yarn add http-code-translator
```

## Usage

```javascript
// load the module
const HttpCodeTranslator = require('http-code-translator');

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
codeTranslator.translate(200);   // OK
codeTranslator.translate("200"); // OK
codeTranslator.translate("299"); // Unkonw value

// Set default value
codeTranslator.setDefaultValue("The code is unknown");
codeTranslator.translate("299"); // The code is unknown
```

## Typings

Typings is set in `index.d.ts` for typescript or code in VS code.

## LICENSE

MIT