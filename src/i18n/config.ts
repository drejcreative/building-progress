export type Locale = (typeof locales)[number];

export const locales = ["en", "rs"] as const;
export const defaultLocale: Locale = "en";
