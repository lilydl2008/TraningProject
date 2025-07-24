import React from "react";
import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Icon } from "@ui-kitten/components";

import { AppText } from "./AppText";

import { AppColor } from "../../styles/AppColor";

interface AppBarProps {
  title: string;
  showBackButton?: boolean;
  rightComponent?: React.ReactNode;
  style?: ViewStyle;
  backIconColor?: string;
  titleStyle?: ViewStyle;
}

export const AppBar: React.FC<AppBarProps> = ({
  title,
  showBackButton = true,
  rightComponent,
  style,
  backIconColor = "black",
  titleStyle,
}) => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.leftContainer}>
        {showBackButton && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleBack}
            activeOpacity={0.7}
          >
            <Icon
              name="arrow-ios-back"
              style={styles.backIcon}
              fill={backIconColor}
            />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.titleContainer}>
        <AppText.Navigator style={[styles.title, titleStyle]}>
          {title}
        </AppText.Navigator>
      </View>

      <View style={styles.rightContainer}>{rightComponent}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: AppColor.background,
    paddingHorizontal: 16,
    height: 56,
  },

  leftContainer: {
    flex: 1,
    alignItems: "flex-start",
    marginLeft: -8,
    height: 56,
    justifyContent: "center",
  },

  titleContainer: {
    flex: 2,
    alignItems: "center",
    height: 56,
    justifyContent: "center",
  },

  rightContainer: {
    flex: 1,
    alignItems: "center",
    height: 56,
    justifyContent: "center",
  },

  backButton: {
    padding: 8,
    marginLeft: 0,
  },

  backIcon: {
    width: 24,
    height: 24,
  },

  title: {
    color: AppColor.black,
    fontWeight: "600",
    fontSize: 18,
  },
});