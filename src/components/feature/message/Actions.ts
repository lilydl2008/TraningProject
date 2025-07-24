import {DropdownAlertType} from "react-native-dropdownalert";

import {createAction} from "../../../store/ActionCreator.ts";
import {MessageType} from "./MessageType.ts";
import {StringUtils} from "../../../utils/StringUtils.ts";
import i18n from "../../../i18n/i18n.ts";
import {LocaleKeys} from "../../../i18n/LocaleKeys.ts";

export const DisplayWarningMessage = "DisplayWarningMessage";
export const doDisplayWarningMessage = (message: string) => createAction(DisplayWarningMessage, {message});

export const DisplaySuccessMessage = "DisplaySuccessMessage";
export const doDisplaySuccessMessage = (message: string) => createAction(DisplaySuccessMessage, {message});

export const DisplayErrorMessage = "DisplayErrorMessage";
export const doDisplayErrorMessage = (message: string) => createAction(DisplayErrorMessage, {message});

export const RemoveMessage = "RemoveMessage";
export const doRemoveMessage = () => createAction(RemoveMessage);

export const doShowMessage = (message: any, alertWithType: any, dismiss: () => void) => {
  // Always dismiss the previous alert first, if any.
  dismiss();

  if (StringUtils.hasValue(message)) {
    switch (message.messageType) {
      case MessageType.SUCCESS: {
        alertWithType({
          type: DropdownAlertType.Success,
          title: i18n.t(LocaleKeys.success),
          message: message.message,
        });
        break;
      }
      case MessageType.WARNING: {
        alertWithType({
          type: DropdownAlertType.Warn,
          title: i18n.t(LocaleKeys.warning),
          message: message.message,
        });
        break;
      }
      case MessageType.ERROR: {
        alertWithType({
          type: DropdownAlertType.Error,
          title: i18n.t(LocaleKeys.error),
          message: message.message,
        });
        break;
      }
    }
  }
}