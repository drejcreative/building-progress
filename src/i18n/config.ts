export type Locale = (typeof locales)[number]

export const locales = ["en", "rs", "de"] as const
export const defaultLocale: Locale = "en"
