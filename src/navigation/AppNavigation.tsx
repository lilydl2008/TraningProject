import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { RootStackParamList, routeConfig } from "./Navigation.ts";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routeConfig.initialRouteName}
        screenOptions={routeConfig.screenOptions}
      >
        {Object.entries(routeConfig.screens).map(([name, config]) => (
          <Stack.Screen
            key={name}
            name={name as keyof RootStackParamList}
            component={config.screen}
            options={config.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}