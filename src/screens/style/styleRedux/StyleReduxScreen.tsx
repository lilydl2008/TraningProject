import React, {useState} from 'react';
import {View} from "react-native";

import {connect} from "react-redux";
import {SafeAreaView} from "react-native-safe-area-context";

import {AppBar} from "../../../components/app/AppBar.tsx";
import AppButton from "../../../components/app/AppButton.tsx";
import {AppText} from "../../../components/app/AppText.tsx";

import {AppStyle} from "../../../styles/AppStyle.ts";
import {doSetCount} from "./Actions.ts";
import {RootStackScreenProps, Routes} from "../../../navigation/Navigation.ts";
import {AppSpace} from "../../../styles/AppSpace.ts";

type StyleReduxScreenProps = RootStackScreenProps<typeof Routes.STYLE_REDUX> & {
  dispatch: any;
  navigation: any;
  count: number;
}

const StyleReduxScreen = ({dispatch, navigation, count}: StyleReduxScreenProps) => {

  const [num, setNum] = useState(0);

  return (
      <SafeAreaView style={AppStyle.container}>

        <AppBar
            title={"Style Redux"}
        />

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

          <AppButton
              title={"+"}
              style={{width: 100}}
              onPress={() => {
                dispatch(doSetCount(count + 1))
              }}
          />

          <AppText.BodyLarge style={{marginVertical: 20}}>
            {count}
          </AppText.BodyLarge>

          <AppButton
              title={"-"}
              style={{
                width: 100,
              }}
              onPress={() => {
                dispatch(doSetCount(count - 1))
              }}
          />
        </View>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

          <AppButton
              title={"+"}
              style={{width: 100}}
              onPress={() => {
                setNum(num + 1)
              }}
          />

          <AppText.BodyLarge style={{marginVertical: 20}}>
            {num}
          </AppText.BodyLarge>

          <AppButton
              title={"-"}
              style={{
                width: 100,
              }}
              onPress={() => {
                setNum(num - 1)
              }}
          />
        </View>

        <AppButton
            title={"Next"}
            style={{marginHorizontal: AppSpace.screenPadding}}
            onPress={() => {
              navigation.navigate(Routes.STYLE_RESULT, {number: num})
            }}
        />
      </SafeAreaView>
  )
}

const props = (state: any) => {
  return {
    count: state.count,
  };
}

export default connect(props)(StyleReduxScreen);