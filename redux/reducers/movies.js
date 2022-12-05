import { ActionType } from "redux-promise-middleware";
import { ACTION_STRING } from "../actions/actionStrings";

const initialState = {
  upcoming: [],
  showing: [],
  details: [],
  movie: {},
  isError: false,
  isLoading: false,
  isFulfilled: false,
};

const moviesReducer = (prevState = initialState, { type, payload }) => {
  const { Pending, Rejected, Fulfilled } = ActionType;
  const { getUpcoming, getShowing, getDetails, createMovie } = ACTION_STRING;

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

    case getShowing.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getShowing.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
      };
    case getShowing.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        showing: payload.data.data,
      };

    case getDetails.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getDetails.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
      };
    case getDetails.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        details: payload.data.data,
      };

    case createMovie.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case createMovie.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
      };
    case createMovie.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        movie: {
          moviename: payload.data.data.movieName,
          synopsis: payload.data.data.synopsis,
          release_data: payload.data.data.releaseDate,
          duration: payload.data.data.duration,
          director: payload.data.data.director,
          image: payload.data.data.image,
        },
      };

    default:
      return prevState;
  }
};

export default moviesReducer;
