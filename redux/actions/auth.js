import { ACTION_STRING } from "./actionStrings";

import { login, logout } from "../../modules/api/auth";

const { authLogout, authLogin, pending, rejected, fulfilled } = ACTION_STRING;

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

const loginThunk = (body) => {
  return async (dispatch) => {
    try {
      dispatch(loginPending());
      const result = await login(body);
      console.log(result.data.data);
      dispatch(loginFulfilled(result.data));
    } catch (error) {
      console.log(error.response.data);
      dispatch(loginRejected(error));
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

const logoutThunk = () => {
  return async (dispatch) => {
    try {
      dispatch(logoutPending());
      const result = await logout();
      dispatch(logoutFulfilled(result.data));
    } catch (error) {
      dispatch(logoutRejected(error));
    }
  };
};

const authAction = {
  loginThunk,
  logoutThunk,
  //   registerThunk,
  //   forgotThunk,
  //   resetThunk,
};

export default authAction;
