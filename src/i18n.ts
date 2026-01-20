import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    supportedLngs: ['en', 'jp'],
    detection: {
      // Order of detection methods
      order: ['navigator', 'htmlTag', 'path', 'subdomain'],
      // Cache user language preference
      caches: ['localStorage'],
      // Convert language codes: ja -> jp, ja-JP -> jp
      convertDetectedLanguage: (lng: string) => {
        // Convert Japanese language codes to 'jp'
        if (lng.startsWith('ja')) {
          return 'jp';
        }
        // Default to English for all other languages
        return 'en';
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;