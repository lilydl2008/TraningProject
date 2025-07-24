import React from "react";
import {View} from "react-native";

import {connect} from "react-redux";
import {SafeAreaView} from "react-native-safe-area-context";

import {AppBar} from "../../../components/app/AppBar.tsx";

import {AppStyle} from "../../../styles/AppStyle.ts";
import {AppText} from "../../../components/app/AppText.tsx";
import {RootStackScreenProps, Routes} from "../../../navigation/Navigation.ts";

type StyleResultScreenProps = RootStackScreenProps<typeof Routes.STYLE_RESULT> & {
  count: number;
}

const StyleResultScreen = ({route, count}: StyleResultScreenProps) => {

  const value = route?.params?.number ?? '-'

  return (
      <SafeAreaView style={AppStyle.container}>

        <AppBar
            title={"Style Result"}
        />

        <View style={{flex: 1, alignItems: 'center',}}>

          <AppText.HeaderSmall>
            Value from Redux
          </AppText.HeaderSmall>

          <AppText.Header>
            {count}
          </AppText.Header>

          <AppText.HeaderSmall>
            Value from Navigator
          </AppText.HeaderSmall>

          <AppText.Header>
            {value}
          </AppText.Header>
        </View>
      </SafeAreaView>
  )
}

const props = (state: any) => {
  return {
    count: state.count,
  };
}

export default connect(props)(StyleResultScreen)