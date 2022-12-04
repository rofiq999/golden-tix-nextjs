import { ActionType } from "redux-promise-middleware";
import { ACTION_STRING } from "./actionStrings";
import { getMovieUpcoming } from "../../modules/api/movies";

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

const moviesActions = {
  getUpcomingThunk,
};

export default moviesActions;
