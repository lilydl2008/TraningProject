import {GET_WEATHER} from "./Actions.ts";
import {FetchStatus} from "../../services/HttpService.ts";

const initialWeatherState: any = {
  data: null,
};

export const onWeatherReducer = (state = initialWeatherState, action: any) => {
  switch (action.type) {
    case GET_WEATHER:
      switch (action.status) {
        case FetchStatus.Success:
          console.log("Pegasus: weather data", action.json.result.realtime.skycon);
          return {
            ...state,
            data: action.json,
          };
      }
  }
  return state;
};