// import {CommonService, AuthService} from '../Utility';
import NetInfo from "@react-native-community/netinfo";
import { singleclient } from "./ApiClient";
import { GenericAbortSignal } from "axios";

const isNetConnected = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const state = await NetInfo.fetch();
      // console.log('state', state);
      if (
        !(
          state.isConnected &&
          (state.isInternetReachable === true ||
            state.isInternetReachable === null)
        )
      ) {
        return reject("NETWORK ERROR");
      } else {
        return resolve(true);
      }
    } catch (e) {
      // console.log(e);
      return reject("NETWORK ERROR");
    }
  });
};

const handleError = (error: any) => {
  try {
    const { message } = error;
    console.log("error message", message);
    // CommonService.showToastError(
    //   (error &&
    //     error.response !== undefined &&
    //     error?.response?.data?.message) ||
    //     message ||
    //     SERVER_ERROR,
    // );
    // CommonService.showAlert(
    //   (error && error.response !== undefined && error.response.data.message) ||
    //     message ||
    //     SERVER_ERROR,
    // );
    if (
      error &&
      error.response !== undefined &&
      error.response.status === 401
    ) {
      // logout
      //   StoreService.dispatch(logoutSuccess());
      //   AuthService.logOut();
    }
  } catch (e) {
    console.log(e);
    // CommonService.showAlert(SERVER_ERROR);
    // CommonService.showToastError(SERVER_ERROR);
  }
  //  throw new Error('Value should be Postitive');
  // Promise.reject(error)
};

export const getApi = async (
  endpoint: any,
  params = {},
  abortSignal: GenericAbortSignal | undefined = undefined
) => {
  let client = singleclient;
  // const {extra, ...parm} = params;
  // const parameters = parm;

  await isNetConnected();
  return new Promise((resolve, reject) => {
    client
      .get(endpoint, {
        params: params,
        signal: abortSignal,
      })
      .then((response) => {
        return resolve(response.data);
      })
      .catch((error) => {
        handleError(error);
        return reject(error);
      });
  });
};

export const postApi = async (endpoint: string, body = {}) => {
  const client = singleclient;
  // const {extra, ...parm} = body;
  // const parameters = parm;

  await isNetConnected();
  // console.log('body in login', body);
  return new Promise((resolve, reject) => {
    client
      .post(endpoint, JSON.stringify(body))
      .then((response) => {
        return resolve(response.data);
      })
      .catch((error) => {
        handleError(error);
        return reject(error);
      });
  });
};

export const putApi = async (endpoint: string, body = {}) => {
  const client = singleclient;
  // const {extra, ...parm} = body;
  // const parameters = parm;

  await isNetConnected();
  return new Promise((resolve, reject) => {
    client
      .put(endpoint, JSON.stringify(body))
      .then((response) => {
        return resolve(response.data);
      })
      .catch((error) => {
        handleError(error);
        return reject(error);
      });
  });
};

export const deleteApi = async (endpoint: string, params = {}) => {
  const client = singleclient;
  // const {extra, ...parm} = params;
  // const parameters = parm;

  await isNetConnected();
  return new Promise((resolve, reject) => {
    client
      .delete(endpoint, { params: params })
      .then((response) => {
        return resolve(response.data);
      })
      .catch((error) => {
        handleError(error);
        return reject(error);
      });
  });
};

export const patchApi = async (endpoint: string, body = {}) => {
  const client = singleclient;
  // const {extra, ...parm} = body;
  // const parameters = parm;

  await isNetConnected();
  return new Promise((resolve, reject) => {
    client
      .patch(endpoint, JSON.stringify(body))
      .then((response) => {
        return resolve(response.data);
      })
      .catch((error) => {
        handleError(error);
        return reject(error);
      });
  });
};
