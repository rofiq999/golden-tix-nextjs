import { ACTION_STRING } from "./actionStrings";

import { login, logout, register, forgot } from "../../modules/api/auth";

const {
  authLogout,
  authLogin,
  authRegister,
  authForgot,
  pending,
  rejected,
  fulfilled,
} = ACTION_STRING;

const loginPending = () => ({
  type: authLogin.concat(pending),
});
const loginRejected = (error) => ({
  type: authLogin.concat(rejected),
  payload: { error },
});
const loginFulfilled = (data) => ({
  type: authLogin.concat(fulfilled),
  payload: { data },
});

const loginThunk = (body, cbSuccess, cbError) => {
  return async (dispatch) => {
    try {
      dispatch(loginPending());
      const result = await login(body);
      console.log(result.data.data);
      dispatch(loginFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      console.log(error.response.data);
      dispatch(loginRejected(error));
      typeof cbSuccess === "function" && cbError(error);
    }
  };
};

const logoutPending = () => ({
  type: authLogout.concat(pending),
});
const logoutRejected = (error) => ({
  type: authLogout.concat(rejected),
  payload: { error },
});
const logoutFulfilled = (data) => ({
  type: authLogout.concat(fulfilled),
  payload: { data },
});

const logoutThunk = (token) => {
  return async (dispatch) => {
    try {
      dispatch(logoutPending());
      const result = await logout(token);
      dispatch(logoutFulfilled(result.data));
      typeof cbSuccess === "function" && cbBerhasil();
    } catch (error) {
      console.log(error.response.data);
      dispatch(logoutRejected(error));
    }
  };
};

const registerPending = () => ({
  type: authRegister.concat(pending),
});
const registerRejected = (error) => ({
  type: authRegister.concat(rejected),
  payload: { error },
});
const registerFulfilled = (data) => ({
  type: authRegister.concat(fulfilled),
  payload: { data },
});

const registerThunk = (body, cbSuccess, cbError) => {
  return async (dispatch) => {
    try {
      dispatch(registerPending());
      const result = await register(body);
      console.log(result);
      dispatch(registerFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      console.log(error);
      dispatch(registerRejected(error));
      typeof cbError === "function" && cbError(error);
    }
  };
};

const forgotPending = () => ({
  type: authForgot.concat(pending),
});
const forgotRejected = (error) => ({
  type: authForgot.concat(rejected),
  payload: { error },
});
const forgotFulfilled = (data) => ({
  type: authForgot.concat(fulfilled),
  payload: { data },
});

const forgotThunk = (body, cbSuccess, cbError) => {
  return async (dispatch) => {
    try {
      dispatch(forgotPending());
      const result = await forgot(body);
      console.log(result);
      dispatch(forgotFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      console.log(error);
      dispatch(forgotRejected(error));
      typeof cbError === "function" && cbError(error);
    }
  };
};

const authAction = {
  loginThunk,
  logoutThunk,
  registerThunk,
  forgotThunk,
  //   resetThunk,
};

export default authAction;
