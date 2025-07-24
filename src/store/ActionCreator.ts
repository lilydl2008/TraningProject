import { Action } from "redux";

export const createAction = <T extends string>(type: T, payload?: any): Action<T> => {
  if (!type) {
    throw new Error("Action type is required");
  }
  return { type, ...(payload !== null ? { payload } : {}) };
};