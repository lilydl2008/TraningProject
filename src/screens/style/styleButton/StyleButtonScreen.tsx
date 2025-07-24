import React from 'react';
import {
  ScrollView,
  View,
} from "react-native";

import {SafeAreaView} from "react-native-safe-area-context";

import AppButton from "../../../components/app/AppButton.tsx";

import {AppStyle} from "../../../styles/AppStyle.tsx";
import {AppSpace} from "../../../styles/AppSpace.ts";
import {AssetIcons} from "../../../values/AssetIcons.ts";

const StyleButtonScreen = () => {

  return (
    <SafeAreaView style={AppStyle.container}>

      <ScrollView style={{flex: 1, paddingHorizontal: AppSpace.screenPadding}}>

        <View style={{gap: AppSpace.cardPadding}}>
          <AppButton.Primary title={'主要按钮'} onPress={() => {
          }}/>
          <AppButton.Primary title={'禁用状态'} disabled={true}/>
          <AppButton.Primary title={'加载状态'} loading={true}/>
        </View>

        <View style={{gap: AppSpace.cardPadding, paddingTop: AppSpace.screenPadding}}>
          <AppButton.Secondary title={'次要按钮'}/>
          <AppButton.Secondary title={'禁用状态'} disabled/>
        </View>

        <View style={{gap: AppSpace.cardPadding, paddingTop: AppSpace.screenPadding}}>
          <AppButton.Ghost title={'幽灵按钮'}/>
        </View>

        <View style={{gap: AppSpace.cardPadding, paddingTop: AppSpace.screenPadding}}>
          <AppButton.IconText icon={AssetIcons.ArrowRight} iconPosition={'right'}>
            Next
          </AppButton.IconText>
          <AppButton.IconTextUpDown icon={AssetIcons.ArrowRight}>
            Next
          </AppButton.IconTextUpDown>
          <AppButton.Icon icon={AssetIcons.ArrowDown}/>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default StyleButtonScreen;