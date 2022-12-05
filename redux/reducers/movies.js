import { ActionType } from "redux-promise-middleware";
import { ACTION_STRING } from "../actions/actionStrings";

const initialState = {
  upcoming: [],
  showing: [],
  details: [],
  genre: [],
  cast: [],
  location: [],
  list: [],
  movie: {
    moviename: null,
    synopsis: null,
    release_date: null,
    duration: null,
    director: null,
    image: null,
  },
  isError: false,
  isLoading: false,
  isFulfilled: false,
};

const moviesReducer = (prevState = initialState, { type, payload }) => {
  const { Pending, Rejected, Fulfilled } = ActionType;
  const {
    getUpcoming,
    getShowing,
    getDetails,
    createMovie,
    getGenre,
    getCast,
    getLocation,
    getList,
  } = ACTION_STRING;

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
          release_date: payload.data.data.releaseDate,
          duration: payload.data.data.duration,
          director: payload.data.data.director,
          image: payload.data.data.image,
        },
      };

    case getGenre.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getGenre.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
      };
    case getGenre.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        genre: payload.data.data,
      };

    case getCast.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getCast.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
      };
    case getCast.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        cast: payload.data.data,
      };

    case getLocation.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getLocation.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
      };
    case getLocation.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        location: payload.data.data,
      };

    case getList.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getList.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
      };
    case getList.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        list: payload.data.data,
      };

    default:
      return prevState;
  }
};

export default moviesReducer;
