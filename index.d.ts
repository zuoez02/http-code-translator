export as namespace HttpCodeTranslatorLib;

export = HttpCodeTranslator;

declare class HttpCodeTranslator {
  constructor(lang: string);

  lang: string;
  translation: object;

  setDefaultValue(defaultValue: string): void;
  loadLanguage(lang: string): void;
  loadTranslation(translation: object): void;
  translate(code: string): string;
  translate(code: number): string;
}
