import 'server-only';

const locales = {
    en: () => import('./en.json').then((module) => module.default),
};

export type localeType = keyof typeof locales

export const getLocale = async (locale: localeType, section?: string) => {
    const translations: Record<string, any> = await locales[locale]();

    if (!section) {
        return translations;
    }

    if (section in translations) {
        return translations[section];
    }

    throw new Error(`Section '${section}' not found in locale '${locale}'`);
};
