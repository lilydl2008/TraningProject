import {SET_COUNT} from "./Actions.ts";

export const onCountReducer = (state = 0, action: any) => {
  switch (action.type) {
    case SET_COUNT: {
      return action.payload.count;
    }
    default:
      return state;
  }
}