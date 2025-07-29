import "server-only";

const dictionaries = {
  en: () => import("@/app/languages/en.json").then((module) => module.default),
  fa: () => import("@/app/languages/fa.json").then((module) => module.default),
};

export const getDictionary = async (locale: keyof typeof dictionaries) => {
  return dictionaries[locale]();
};

