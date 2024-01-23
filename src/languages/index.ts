import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';
import en from './English';
import fr from './French';

const i18n = new I18n();

// Set the locale once at the beginning of your app.
i18n.locale = getLocales()[0].languageCode;

i18n.translations = {
  'en-US': en,
  en,
  fr,
};

export default i18n;
