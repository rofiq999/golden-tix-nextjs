import { ACTION_STRING } from "../actions/actionStrings";

const initialState = {
  userData: { id: null, role: null, token: null },
  isLoading: false,
  isError: false,
  isFulfilled: false,
  error: null,
};

const authReducer = (prevState = initialState, { payload, type }) => {
  switch (type) {
    case ACTION_STRING.authLogin.concat(ACTION_STRING.pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case ACTION_STRING.authLogin.concat(ACTION_STRING.rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        error: payload.error.response.data.msg,
      };
    case ACTION_STRING.authLogin.concat(ACTION_STRING.fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        userData: {
          id: payload.data.data.userData.id,
          role: payload.data.data.userData.role,
          token: payload.data.data.userData.token,
        },
      };

    case ACTION_STRING.authLogout.concat(ACTION_STRING.pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case ACTION_STRING.authLogout.concat(ACTION_STRING.rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
      };
    case ACTION_STRING.authLogout.concat(ACTION_STRING.fulfilled):
      return initialState;

    case ACTION_STRING.authRegister.concat(ACTION_STRING.pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case ACTION_STRING.authRegister.concat(ACTION_STRING.rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        error: payload.error.response,
      };
    case ACTION_STRING.authRegister.concat(ACTION_STRING.fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        // userData: {
        //   id: payload.data.data.userData.id,
        //   role: payload.data.data.userData.role,
        //   token: payload.data.data.userData.token,
        // },
      };

    case ACTION_STRING.authForgot.concat(ACTION_STRING.pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case ACTION_STRING.authForgot.concat(ACTION_STRING.rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        error: payload.error.response,
      };
    case ACTION_STRING.authForgot.concat(ACTION_STRING.fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        // userData: {
        //   id: payload.data.data.userData.id,
        //   role: payload.data.data.userData.role,
        //   token: payload.data.data.userData.token,
        // },
      };

    default:
      return prevState;
  }
};

export default authReducer;
