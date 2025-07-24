import React from "react";
import { useTranslation } from "react-i18next";
import { LocaleKeys } from "../../../i18n/LocaleKeys";
import  AppListItem from "../../../components/app/AppListItem";


const StyleListScreen = () => {
  const [t] = useTranslation();

  return <AppListItem title={t(LocaleKeys.switchLocale)} onPress={() => {}} />;
};

export default StyleListScreen;
