import { BASE_URL } from "@/constants/ApiContants";
import axios from "axios";

// import {LOGOUT_SUCCESS} from './Types';
import { Platform } from "react-native";
// import {ForceUpdateService, StorageService} from '../Utility';
// import { AuthService, ForceUpdateService, StoreService } from '../Utility';

export const middlewareConfig = {
  interceptors: {
    request: [
      {
        success: async (
          { getState, dispatch, getSourceAction }: any,
          req: { timeoutErrorMessage: any; headers: any }
        ) => {
          // console.log('interceptors request ', req);

          //...
          req.timeoutErrorMessage = "SERVER TIMEOUT";

          //   const appVersion = await StorageService.get(APP_SESSIONS.appVersion);

          //   const userData = await StorageService.get(APP_SESSIONS.userData);

          //   const authHeader = userData?.token
          //     ? {Authorization: userData?.token}
          //     : {};

          //   req.headers = {
          //     ...req.headers,
          //     'X-MIJO-Version': appVersion || '1.0.0',
          //     ...authHeader,
          //   };

          return req;
        },
        error: ({ getState, dispatch, getSourceAction }: any, error: any) => {
          // console.log('interceptors request error ', error);
          return error;
        },
      },
    ],
    response: [
      {
        success: ({ getState, dispatch, getSourceAction }: any, res: any) => {
          // console.log('interceptors response ', res); //contains information about request object

          // let obj = {
          //   maintenance: false,
          //   forceUpdate: false,
          //   hasUpdate: false
          // }

          // if( res.headers?.maintenance == "true" ){
          //   obj.maintenance = true;
          // }

          // if( res.headers?.hasupdate === "true" ){

          //     obj.hasUpdate = true;
          //   if( res.headers?.forceupdate == "true" ){
          //     obj.forceUpdate = true;
          //   }
          // }

          //   setTimeout(() => {
          //     console.log('ForceUpdateService obj>>', obj)
          //     ForceUpdateService.forceUpdate(obj);
          //   }, 1000);

          return Promise.resolve(res);
        },
        error: (
          { getState, dispatch, getSourceAction }: any,
          error: { message: any; response: { status: number } }
        ) => {
          // console.log('interceptors response error', error);
          if (!error.message) {
            // network error
            error.message = "Network Error";
          }
          if (error && error.response && error.response.status === 401) {
            // setTimeout(() => {
            //   this.logout();
            // }, 10);
          }
          return Promise.reject(error);
        },
      },
    ],
  },
};

// const logoutReset = data => dispatch => {
//   AuthService.logOut();
//   setTimeout(() => {
//     dispatch({type: LOGOUT_SUCCESS, payload: data});
//   }, 500);
// };

// const logout = () => {
//   StoreService.dispatch(this.logoutReset({}));
// };

const authClient = (baseUrl: string) => {
  const axiosClient = axios.create({
    method: "POST",
    url: "",
    baseURL: baseUrl,
    responseType: "json",
    // timeout: TIMEOUT,
    // timeoutErrorMessage: "SERVER TIMEOUT",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      "Accept-Language": "en",
      "X-MIJO-Platform": Platform.OS,
      "X-MIJO-Version": "1.0.0",
    },
  });

  axiosClient.interceptors.request.use(
    async (req) => {
      // console.log('interceptors request ', req); //contains information about request object

      const data1 = (req.data ? JSON.parse(req.data) : req.data) || req.params;
      // console.log('data1', data1);
      const { extra, ...parm } = data1;
      if (req.data) {
        req.data = parm;
      } else if (req.params) {
        req.params = parm;
      }

      let token = "";
      if (extra) {
        if (extra.timeout !== undefined) {
          req.timeout = extra.timeout;
        }
        if (extra.token !== undefined) {
          token = extra.token;
        }
      }

      //...
      req.timeoutErrorMessage = "SERVER TIMEOUT";

      //   const appVersion = await StorageService.get(APP_SESSIONS.appVersion);

      //   const userData = await StorageService.get(APP_SESSIONS.userData);

      //   const authHeader = userData?.token
      //     ? { Authorization: userData?.token }
      //     : token
      //     ? { Authorization: token }
      //     : {};
      // console.log('appVersion>>', appVersion);
      //   req.headers = {
      //     ...req.headers,
      //     "X-MIJO-Version": appVersion || "1.0.0",
      //     ...authHeader,
      //   };

      // console.log('interceptors request ', req); //contains information about request object

      return req;
    },
    (error) => Promise.reject(error)
  );
  // Intercept all responses
  axiosClient.interceptors.response.use(
    async (response) => {
      //console.log('interceptors response ', response); //contains information about request object

      let obj = {
        maintenance: false,
        forceUpdate: false,
        hasUpdate: false,
      };

      if (response.headers?.maintenance === "true") {
        obj.maintenance = true;
      }

      if (response.headers?.hasupdate === "true") {
        obj.hasUpdate = true;
        if (response.headers?.forceupdate === "true") {
          obj.forceUpdate = true;
        }
      }

      //   setTimeout(() => {
      //     // console.log('ForceUpdateService obj>>', obj);
      //     ForceUpdateService.forceUpdate(obj);
      //   }, 1000);

      return response;
    },
    (error) => {
      // console.log('interceptors response error', error);
      if (!error.message) {
        // network error
        // error.message = SERVER_ERROR;
      }
      if (error && error.response && error.response.status === 401) {
        // setTimeout(() => {
        //   this.logout();
        // }, 10);
      }
      return Promise.reject(error);
    }
  );

  // axiosClient.interceptors = middlewareConfig.interceptors;
  return axiosClient;
};

export const multiclient = {
  default: { client: authClient(BASE_URL) },
  other: { client: authClient(BASE_URL) },
};

export const singleclient = authClient(BASE_URL);
// export const socketsingleclient = authClient(SOCKET_API_URL);
