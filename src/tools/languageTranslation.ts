const translate = require("translate-google");

// const languageToTranslate = ["en", "es", "de"];

export default async function languageTranslation(fr: string) {
  let objectLanguage: ObjectLanguage = {
    fr: fr,
    en: "",
    es: "",
    de: "",
  };
  for (let language in objectLanguage) {
    objectLanguage[language] = await translate(fr, {
      from: "fr",
      to: language,
    });
  }
  return objectLanguage;
}

export type ObjectLanguage = {
  [key: string]: string;
};
