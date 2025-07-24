import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import {en} from "./locale/en.ts";
import {zh} from "./locale/zh.ts";

i18n.use(initReactI18next).init({
//  lng: 'zh',
  fallbackLng: 'en',
  resources: {
    en: {translation: en},
    zh: {translation: zh},
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;