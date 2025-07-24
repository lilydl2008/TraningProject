import { ApiPath } from "./ApiPath";
import { HttpService, RequestMethod } from "../services/HttpService";

export const getWeather = (action: any) => {
  return HttpService.request(
    ApiPath.GET_WEATHER,
    RequestMethod.Get,
    {},
    action,
  );
};