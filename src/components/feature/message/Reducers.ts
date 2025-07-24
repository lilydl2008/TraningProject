import {MessageType} from "./MessageType.ts";
import {DisplayErrorMessage, DisplaySuccessMessage, DisplayWarningMessage} from "./Actions.ts";

const initialMessage = {
  messageType: MessageType.NO_MESSAGE,
  message: null,
}

export const onMessageReducer = (state = initialMessage, action: any) => {
  switch (action.type) {
    case DisplaySuccessMessage: {
      return {
        messageType: MessageType.SUCCESS,
        message: action.payload.message,
      }
    }
    case DisplayWarningMessage: {
      return {
        messageType: MessageType.WARNING,
        message: action.payload.message,
      }
    }
    case DisplayErrorMessage: {
      return {
        messageType: MessageType.ERROR,
        message: action.payload.message,
      }
    }
    case RemoveMessage: {
      // Restore StatusBar to default when message is removed
      StatusBarService.setDefault();
      return {
        messageType: MessageType.NO_MESSAGE,
        message: null,
      }
    }
  }
  return state;
}