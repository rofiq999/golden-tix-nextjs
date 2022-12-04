import { ActionType } from "redux-promise-middleware";
import { ACTION_STRING } from "./actionStrings";
import {
  getMovieUpcoming,
  getMovieShowing,
  getMovieDetails,
} from "../../modules/api/movies";

const { Pending, Rejected, Fulfilled } = ActionType;

const getUpcomingPending = () => ({
  type: ACTION_STRING.getUpcoming.concat("_", Pending),
});

const getUpcomingRejected = (error) => ({
  type: ACTION_STRING.getUpcoming.concat("_", Rejected),
  payload: { error },
});

const getUpcomingFulfilled = (data) => ({
  type: ACTION_STRING.getUpcoming.concat("_", Fulfilled),
  payload: { data },
});

const getShowingPending = () => ({
  type: ACTION_STRING.getShowing.concat("_", Pending),
});

const getShowingRejected = (error) => ({
  type: ACTION_STRING.getShowing.concat("_", Rejected),
  payload: { error },
});

const getShowingFulfilled = (data) => ({
  type: ACTION_STRING.getShowing.concat("_", Fulfilled),
  payload: { data },
});

const getDetailsPending = () => ({
  type: ACTION_STRING.getDetails.concat("_", Pending),
});

const getDetailsRejected = (error) => ({
  type: ACTION_STRING.getDetails.concat("_", Rejected),
  payload: { error },
});

const getDetailsFulfilled = (data) => ({
  type: ACTION_STRING.getDetails.concat("_", Fulfilled),
  payload: { data },
});

const getUpcomingThunk = (params) => {
  return async (dispacth) => {
    try {
      dispacth(getUpcomingPending());
      const result = await getMovieUpcoming(params);
      dispacth(getUpcomingFulfilled(result.data));
    } catch (error) {
      dispacth(getUpcomingRejected(error));
    }
  };
};

const getShowingThunk = (params) => {
  return async (dispacth) => {
    try {
      dispacth(getShowingPending());
      const result = await getMovieShowing(params);
      dispacth(getShowingFulfilled(result.data));
    } catch (error) {
      dispacth(getShowingRejected(error));
    }
  };
};

const getDetailsThunk = (params, token) => {
  return async (dispacth) => {
    try {
      dispacth(getDetailsPending());
      const result = await getMovieDetails(token, params);
      dispacth(getDetailsFulfilled(result.data));
    } catch (error) {
      dispacth(getDetailsRejected(error));
    }
  };
};

const moviesActions = {
  getUpcomingThunk,
  getShowingThunk,
  getDetailsThunk,
};

export default moviesActions;
