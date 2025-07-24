import React, { useEffect } from "react";
import { Platform, StatusBar } from "react-native";

import { connect, Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DropDownAlert, { DropdownAlertData } from "react-native-dropdownalert";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";

import store from "./src/store/RootStore";
import { ConfigService } from "./src/services/ConfigService";

import './src/i18n/i18n';

import { AppTheme } from "./src/styles/AppTheme";

import { doRemoveMessage, doShowMessage } from "./src/components/feature/message/Actions";
import AppNavigation from "./src/navigation/AppNavigation";
import { StatusBarService } from "./src/services/StatusBarService";

let alert = (_data: DropdownAlertData) => new Promise<DropdownAlertData>(res => res);
let dismiss = () => {};

const AppContent = ({ dispatch, onMessage }: any) => {

  useEffect(() => {
    ConfigService.initialize().catch(error => {
      console.error('Failed to initialize config:', error);
    });
  }, []);

   useEffect(() => {
    if (onMessage && onMessage.message) {
      // Set StatusBar to dark-content when message is shown
      StatusBarService.setDarkContent();
    } else {
      // Reset to default when no message
      StatusBarService.setDefault();
    }
  }, [onMessage]);

  useEffect(() => {
    console.log(onMessage);
    doShowMessage(onMessage, alert, dismiss);
  }, [onMessage]);

  return (
      <SafeAreaProvider>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={AppTheme}>
          <AppNavigation />
        </ApplicationProvider>

        <DropDownAlert
            alert={func => (alert = func)}
            dismiss={func => (dismiss = func)}
            onDismissAutomatic={() => {
              dispatch(doRemoveMessage());
            }}
            dismissInterval={1500}
            warnColor="#FF9800"
            errorColor="#F44336"
            infoColor="#42A5F5"
            zIndex={9999}
            alertViewStyle={{
              padding: 15,
              paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) + 10 : 15,
            }}
        />
      </SafeAreaProvider>
  );
}

const props = (state: any) => {
  return {
    onMessage: state.message,
  }
}
const ConnectedApp = connect(props)(AppContent);

const App = () => {

  return (
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
  )
}

export default App;