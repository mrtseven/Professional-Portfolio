export const siteConfig = {
    name: "Mrt - Dual Language",
    description: 'Mrt - Dual Language Description',
    defaultLanguage: 'en', // en => english , fa => farsi
    languages: ['en', 'fa'], // All Languages Here
    rtlSupport: true, // True OR False
    rtlLanguages: ['fa'], // Languages Are Support RTL
};


export interface Translations {
    [key: string]: string;
}


export const translate = (title: string, trans: Translations): string => {
    const lowercaseTitle = title.toLowerCase();
    if (trans?.hasOwnProperty(lowercaseTitle)) {
        return trans[lowercaseTitle];
    }

    return title;
};
