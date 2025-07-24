import {createAction} from "../../../store/ActionCreator.ts";

export const SET_COUNT = 'SET_COUNT';

export const doSetCount = (count: number) => async (dispatch: any) => {
  const action = createAction(SET_COUNT, {count});
  return dispatch(action)
}