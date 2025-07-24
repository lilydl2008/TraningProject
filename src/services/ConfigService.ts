import i18n from 'i18next';
import { Constants } from '../values/Constants';
import { Storage } from '../utils/Storage';

export const ConfigService = {

  async initialize(): Promise<void> {
    try {
      const storedLang = await Storage.getString(Constants.STORAGE_LOCALE);
      await i18n.changeLanguage(storedLang ?? Constants.DEFAULT_LANGUAGE);
    } catch (error) {
      console.error('Failed to load language:', error);
      await i18n.changeLanguage(Constants.DEFAULT_LANGUAGE);
    }
  },

  getCurrentLanguage() {
    return i18n.language;
  },

  async setLanguage(language: typeof Constants.LANGUAGE[keyof typeof Constants.LANGUAGE]): Promise<void> {
    await i18n.changeLanguage(language);
    await Storage.setString(Constants.STORAGE_LOCALE, language);
  },

  async toggleLanguage(): Promise<void> {
    const newLanguage = this.getCurrentLanguage() === Constants.LANGUAGE.EN
        ? Constants.LANGUAGE.ZH
        : Constants.LANGUAGE.EN;
    await this.setLanguage(newLanguage);
  }
};