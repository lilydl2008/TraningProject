import React from 'react';
import {
  ScrollView,
  View,
} from "react-native";

import {SafeAreaView} from "react-native-safe-area-context";

import {AppText} from "../../../components/app/AppText.tsx";

import {AppStyle} from "../../../styles/AppStyle.tsx";
import {AppSpace} from "../../../styles/AppSpace.ts";

const StyleTextScreen = () => {

  return (
    <SafeAreaView style={AppStyle.container}>

      <ScrollView style={{
        flex: 1,
      }}>

        <View style={{padding: AppSpace.screenPadding}}>
          <AppText.HeaderLarge>Header Large</AppText.HeaderLarge>
          <AppText.Header>Header</AppText.Header>
          <AppText.HeaderSmall>Header Small</AppText.HeaderSmall>
        </View>

        <View style={{padding: AppSpace.screenPadding}}>
          <AppText.BodyLarge>Body Large</AppText.BodyLarge>
          <AppText.Body>Body</AppText.Body>
          <AppText.BodySmall>Body Small</AppText.BodySmall>
        </View>

        <View style={{padding: AppSpace.screenPadding}}>
          <AppText.Navigator>Navigator</AppText.Navigator>
          <AppText.Link>Link</AppText.Link>
        </View>

        <View style={{padding: AppSpace.screenPadding}}>
          <AppText.Caption>Caption</AppText.Caption>
          <AppText.Label>Label</AppText.Label>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default StyleTextScreen;