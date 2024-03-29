import "server-only";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () =>
    import("./src/dictionaries/en.json").then((module) => module.default),
  de: () =>
    import("./src/dictionaries/de.json").then((module) => module.default),
  cs: () =>
    import("./src/dictionaries/cs.json").then((module) => module.default),
  ar: () =>
    import("./src/dictionaries/ar.json").then((module) => module.default),
};

export const getDictionary = async (locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();
