

import React, { useEffect } from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import { View } from "react-native";
import { AppStyle } from "../../styles/AppStyle";
const renderHeader = () => {
    return (
        <View style={styles.headerContainer}>
          <AppIcon
              name={AssetIcons.Pin}
              color="#000000"
          />
          <AppText.Body style={styles.headerBody}>
            {t(LocaleKeys.city)}
          </AppText.Body>
          <AppIcon
              name={AssetIcons.ArrowDown}
              size={16}
              color="#000000"
          />
          <View style={{flex: 1}}/>
          <AppIcon
              name={AssetIcons.Search}
              color="#000000"
          />
        </View>
    );
  }

  const renderCurrentWeather = () => {
    return (
        <View/>
    )
  }

  const renderHourlyWeather = () => {
    return (
        <View/>
    )
  }

  const renderDailyWeather = () => {
    return (
        <View/>
    )
  }
  
  export const HomeScreen = () => {
    return (
      <SafeAreaView style={AppStyle.container}>
        {
          renderHeader()
        }
        {
          renderCurrentWeather()
        }
        {
          renderHourlyWeather()
        }
        {
          renderDailyWeather()
        }
      </SafeAreaView>
  )
}