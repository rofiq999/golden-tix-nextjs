import { ActionType } from "redux-promise-middleware";
import { ACTION_STRING } from "../actions/actionStrings";

const initialState = {
  upcoming: [],
  isError: false,
  isLoading: false,
  isFulfilled: false,
};

const moviesReducer = (prevState = initialState, { type, payload }) => {
  const { Pending, Rejected, Fulfilled } = ActionType;
  const { getUpcoming } = ACTION_STRING;

  switch (type) {
    case getUpcoming.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getUpcoming.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
      };
    case getUpcoming.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        upcoming: payload.data.data,
      };

    default:
      return prevState;
  }
};

export default moviesReducer;
