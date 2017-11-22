'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HttpCodeTranslator = function () {
  function HttpCodeTranslator() {
    var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'zh';

    _classCallCheck(this, HttpCodeTranslator);

    this.loadLanguage(lang);
  }

  _createClass(HttpCodeTranslator, [{
    key: 'setDefaultValue',
    value: function setDefaultValue(defaultValue) {
      if (typeof defaultValue !== 'string') {
        throw Error('defaultValue must be a string');
      }
      this.defaultValue = defaultValue;
    }
  }, {
    key: 'loadLanguage',
    value: function loadLanguage(lang) {
      if (typeof lang === 'string') {
        try {
          this.translation = require('../langs/' + lang + '.json');
          this.lang = lang;
          this.defaultValue = this.translation['defaultValue'] || 'No default value defined';
        } catch (error) {
          console.error('Load language \'' + lang + '\' failed. Maybe there isn\'t the language here.');
          console.error(error);
          throw error;
        }
      } else {
        throw Error('lang must be a string');
      }
    }
  }, {
    key: 'loadTranslation',
    value: function loadTranslation(translation) {
      var _this = this;

      if ((typeof translation === 'undefined' ? 'undefined' : _typeof(translation)) === 'object') {
        this.translation = {};
        Object.keys(translation).forEach(function (key) {
          _this.translation[String(key)] = translation[key];
        });
        this.defaultValue = this.translation['defaultValue'];
      } else {
        throw Error('translation must be an object');
      }
    }
  }, {
    key: 'translate',
    value: function translate(code) {
      var type = typeof code === 'undefined' ? 'undefined' : _typeof(code);
      if (type === 'string' || type === 'number') {
        var message = this.translation[type === 'string' ? code : String(code)];
        if (!message) {
          return this.defaultValue;
        }
        return message;
      } else {
        throw Error('code must be a string or a number');
      }
    }
  }]);

  return HttpCodeTranslator;
}();

module.exports = HttpCodeTranslator;