import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {Constants} from "../values/Constants";
import {doDisplayWarningMessage} from "../components/feature/message/Actions";

// Define error type
export class HttpError extends Error {
  constructor(
      public status: number,
      public message: string,
      public data?: any,
  ) {
    super(message);
    this.name = "HttpError";
  }
}

// Define fetch status
export const FetchStatus = {
  NoFetch: "noFetch",
  Start: "start",
  Success: "success",
  Failed: "failed",
} as const;

export const RequestMethod = {
  Get: "get",
  Post: "post",
  Put: "put",
  Delete: "delete",
} as const;

// Create axios instance
const axiosInstance = axios.create({
  baseURL: Constants.BASE_URL,
  timeout: 10000,
  headers: {
    common: {
      "Content-Type": "application/json",
      Accept: "application/json, text/plain, */*",
    },
  },
});

// Setup request interceptor
axiosInstance.interceptors.request.use(
    async config => {
      // const token = await TokenService.getToken();
      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`;
      // }
      return config;
    },
    error => Promise.reject(error),
);

// Setup response interceptor
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      console.log("Pegasus: interceptor response", response);
      return response;
    },
    error => {
      console.log("Pegasus: interceptor error", error);
      if (error.response) {
        const {status, data} = error.response;
        if (status === 401) {
          // TokenService.handleTokenExpiration();
        }
        return Promise.reject(new HttpError(status, data?.message || "Request failed", data));
      }
      return Promise.reject(new HttpError(0, "Network request failed, please check your connection"));
    },
);

// Action creator for fetch status
export const fetchActionCreator = (action: any, status: string, json?: any, error?: any) => {
  console.log("Pegasus: fetchActionCreator", {action, status, json, error});
  switch (status) {
    case FetchStatus.Start:
      return {...action, status: FetchStatus.Start, json};
    case FetchStatus.Success:
      return {...action, status: FetchStatus.Success, json};
    case FetchStatus.Failed:
      return {...action, status: FetchStatus.Failed, json, error};
    default:
      return action;
  }
};

// Export HTTP methods with Redux integration
export const HttpService = {
  get: <T = any>(url: string, config?: AxiosRequestConfig) => axiosInstance.get<T>(url, config),

  post: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) =>
      axiosInstance.post<T>(url, data, config),

  put: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) =>
      axiosInstance.put<T>(url, data, config),

  delete: <T = any>(url: string, config?: AxiosRequestConfig) =>
      axiosInstance.delete<T>(url, config),

  // Redux integrated request method
  request: (path: string, method: string, params: any, action: any) => (dispatch: any) => {
    dispatch(fetchActionCreator(action, FetchStatus.Start));

    const lowerMethod = method.toLowerCase();
    const requestConfig: AxiosRequestConfig = {
      url: path.startsWith("/") ? path : `/${path}`,
      method: lowerMethod,
      ...(lowerMethod === "get" ? {params} : {data: params}),
    };

    return axiosInstance
        .request(requestConfig)
        .then(response => {
          if (!response || !response.data) {
            throw new Error("Empty response from server");
          }
          return dispatch(fetchActionCreator(action, FetchStatus.Success, response.data));
        })
        .catch(error => {
          console.log("Pegasus: error response", error.response);
          const errorMessage =
              error instanceof Error ? error.message : "Server error, please try again later";
          
          // Display warning message to user
          dispatch(doDisplayWarningMessage(errorMessage));
          
          dispatch(fetchActionCreator(action, FetchStatus.Failed, null, errorMessage));
          throw new Error(errorMessage);
        });
  },
};