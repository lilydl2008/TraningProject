import {getWeather} from "../../api/WeatherApi.ts";
import { createAction } from "../../store/ActionCreator.ts";

export const GET_WEATHER = "GET_WEATHER";

export const doGetWeather = () => async (dispatch: any) => {
  const action = createAction(GET_WEATHER);
  return dispatch(getWeather(action))
}