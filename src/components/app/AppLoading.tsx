import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

import {Spinner} from "@ui-kitten/components";

import {AppSpace} from '../../styles/AppSpace.ts';

interface AppLoadingProps {
  style?: ViewStyle;
  overlay?: boolean;
  backgroundColor?: string;
}

const AppLoading: React.FC<AppLoadingProps> = ({
                                                 style,
                                                 overlay = true,
                                                 backgroundColor = 'rgba(0, 0, 0, 0.5)',
                                               }) => {
  return (
      <View style={[
        styles.container,
        overlay && styles.overlay,
        overlay && {backgroundColor},
        style
      ]}>
        {/*<ActivityIndicator size={size} color={color} />*/}
        <Spinner/>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: AppSpace.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
  },
});

export default AppLoading;