import { ActionType } from "redux-promise-middleware";
import { ACTION_STRING } from "./actionStrings";
import {
  getMovieUpcoming,
  getMovieShowing,
  getMovieDetails,
  createMovies,
  getGenre,
  getCast,
  getMovieLocation,
  getListLocation,
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

const createMoviePending = () => ({
  type: ACTION_STRING.createMovie.concat("_", Pending),
});

const createMovieRejected = (error) => ({
  type: ACTION_STRING.createMovie.concat("_", Rejected),
  payload: { error },
});

const createMovieFulfilled = (data) => ({
  type: ACTION_STRING.createMovie.concat("_", Fulfilled),
  payload: { data },
});

const getGenrePending = () => ({
  type: ACTION_STRING.getGenre.concat("_", Pending),
});

const getGenreRejected = (error) => ({
  type: ACTION_STRING.getGenre.concat("_", Rejected),
  payload: { error },
});

const getGenreFulfilled = (data) => ({
  type: ACTION_STRING.getGenre.concat("_", Fulfilled),
  payload: { data },
});

const getCastPending = () => ({
  type: ACTION_STRING.getCast.concat("_", Pending),
});

const getCastRejected = (error) => ({
  type: ACTION_STRING.getCast.concat("_", Rejected),
  payload: { error },
});

const getCastFulfilled = (data) => ({
  type: ACTION_STRING.getCast.concat("_", Fulfilled),
  payload: { data },
});

const getLocationPending = () => ({
  type: ACTION_STRING.getLocation.concat("_", Pending),
});

const getLocationRejected = (error) => ({
  type: ACTION_STRING.getLocation.concat("_", Rejected),
  payload: { error },
});

const getLocationFulfilled = (data) => ({
  type: ACTION_STRING.getLocation.concat("_", Fulfilled),
  payload: { data },
});

const getListPending = () => ({
  type: ACTION_STRING.getList.concat("_", Pending),
});

const getListRejected = (error) => ({
  type: ACTION_STRING.getList.concat("_", Rejected),
  payload: { error },
});

const getListFulfilled = (data) => ({
  type: ACTION_STRING.getList.concat("_", Fulfilled),
  payload: { data },
});

const getUpcomingThunk = (params) => {
  return async (dispatch) => {
    try {
      dispatch(getUpcomingPending());
      const result = await getMovieUpcoming(params);
      dispatch(getUpcomingFulfilled(result.data));
    } catch (error) {
      dispatch(getUpcomingRejected(error));
    }
  };
};

const getShowingThunk = (params) => {
  return async (dispatch) => {
    try {
      dispatch(getShowingPending());
      const result = await getMovieShowing(params);
      dispatch(getShowingFulfilled(result.data));
    } catch (error) {
      dispatch(getShowingRejected(error));
    }
  };
};

const getDetailsThunk = (params, token) => {
  return async (dispatch) => {
    try {
      dispatch(getDetailsPending());
      const result = await getMovieDetails(token, params);
      dispatch(getDetailsFulfilled(result.data));
    } catch (error) {
      dispatch(getDetailsRejected(error));
    }
  };
};

const createMovieThunk = (token, data, cbSuccess, cbError) => {
  return async (dispatch) => {
    try {
      dispatch(createMoviePending());
      const result = await createMovies(token, data);
      dispatch(createMovieFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(createMovieRejected(error));
      typeof cbError === "function" && cbError(error.response.data.msg);
    }
  };
};

const getGenreThunk = (token) => {
  return async (dispatch) => {
    try {
      dispatch(getGenrePending());
      const result = await getGenre(token);
      dispatch(getGenreFulfilled(result.data));
    } catch (error) {
      dispatch(getGenreRejected(error));
    }
  };
};

const getCastThunk = (token) => {
  return async (dispatch) => {
    try {
      dispatch(getCastPending());
      const result = await getCast(token);
      dispatch(getCastFulfilled(result.data));
    } catch (error) {
      dispatch(getCastRejected(error));
    }
  };
};

const getLocationThunk = () => {
  return async (dispatch) => {
    try {
      dispatch(getLocationPending());
      const result = await getMovieLocation();
      dispatch(getLocationFulfilled(result.data));
    } catch (error) {
      dispatch(getLocationRejected(error));
    }
  };
};

const getListThunk = (params, token) => {
  return async (dispatch) => {
    try {
      dispatch(getListPending());
      const result = await getListLocation(token, params);
      dispatch(getListFulfilled(result.data));
    } catch (error) {
      dispatch(getListRejected(error));
    }
  };
};

const moviesActions = {
  getUpcomingThunk,
  getShowingThunk,
  getDetailsThunk,
  createMovieThunk,
  getGenreThunk,
  getCastThunk,
  getLocationThunk,
  getListThunk,
};

export default moviesActions;
