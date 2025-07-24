import React from "react";

import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import {RouteProp} from "@react-navigation/native";
import StyleListScreen from "../screens/style/styleList/StyleListScreen.tsx";

export const Routes = {
  //
  STYLE_LIST: "StyleList",
  STYLE_REDUX: "StyleRedux",
  STYLE_RESULT: "StyleResult",
} as const;

// 路由类型定义
export type Routes = (typeof Routes)[keyof typeof Routes];

// 导航参数类型定义
export type RootStackParamList = {
  //
  [Routes.STYLE_LIST]: undefined;
  [Routes.STYLE_REDUX]: undefined;
  [Routes.STYLE_RESULT]: undefined;
};

// 导航属性类型
export type RootStackNavigationProp =
    NativeStackNavigationProp<RootStackParamList>;

// 屏幕属性类型
export type RootStackScreenProps<T extends keyof RootStackParamList> = {
  navigation: RootStackNavigationProp;
  route: RouteProp<RootStackParamList, T>;
};

// 通用屏幕配置
const commonScreenOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: "white",
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontWeight: "600" as const,
    fontSize: 18,
  },
  contentStyle: {
    backgroundColor: "white",
  },
  headerShown: false,
};

// 屏幕配置
const screenConfigs: Record<
    keyof RootStackParamList,
    { screen: React.ComponentType<any>; options?: NativeStackNavigationOptions }
> = {
  [Routes.STYLE_LIST]: {
    screen: StyleListScreen,
    options: {},
  },
  [Routes.STYLE_REDUX]: {
    screen: StyleListScreen,
    options: {},
  },
  [Routes.STYLE_RESULT]: {
    screen: StyleListScreen,
    options: {},
  }
};

// 主路由配置
export const routeConfig = {
  initialRouteName: Routes.STYLE_LIST,
  screens: screenConfigs,
  screenOptions: commonScreenOptions,
};