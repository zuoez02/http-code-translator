class HttpCodeTranslator {
  constructor(lang = 'zh') {
    this.loadLanguage(lang);
  }

  setDefaultValue(defaultValue) {
    if (typeof defaultValue !== 'string') {
      throw Error('defaultValue must be a string');
    }
    this.defaultValue = defaultValue;
  }

  loadLanguage(lang) {
    if (typeof lang === 'string') {
      try {
        this.translation = require(`../langs/${lang}.json`);
        this.lang = lang;
        this.defaultValue = this.translation['defaultValue'] || 'No default value defined';
      } catch (error) {
        console.error(`Load language '${lang}' failed. Maybe there isn't the language here.`);
        console.error(error);
        throw error;
      }
    } else {
      throw Error('lang must be a string');
    }
  }

  loadTranslation(translation) {
    if (typeof translation === 'object') {
      this.translation = {}; 
      Object.keys(translation).forEach((key) => {
        this.translation[String(key)] = translation[key];
      });
      this.defaultValue = this.translation['defaultValue'];
    } else {
      throw Error('translation must be an object');
    }
  }

  translate(code) {
    const type = typeof code;
    if (type === 'string' || type === 'number') {
      const message = this.translation[type === 'string' ? code : String(code)];
      if (!message) {
        return this.defaultValue;
      }
      return message;
    } else {
      throw Error('code must be a string or a number');
    }
  }
}

module.exports = HttpCodeTranslator;
