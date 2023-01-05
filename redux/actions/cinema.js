// import { ActionType } from "redux-promise-middleware";
import { ACTION_STRING } from "./actionStrings";
import {
  getCinemaShowingList,
  getScheduleList,
} from "../../modules/api/cinema";

const { pending, rejected, fulfilled, getCinemaShowing } = ACTION_STRING;

const getSchedulePending = () => ({
  type: ACTION_STRING.getSchedule.concat(pending),
});

const getScheduleRejected = (error) => ({
  type: ACTION_STRING.getSchedule.concat(rejected),
  payload: { error },
});

const getScheduleFulfilled = (data) => ({
  type: ACTION_STRING.getSchedule.concat(fulfilled),
  payload: { data },
});

const getScheduleThunk = (config) => {
  return async (dispatch) => {
    try {
      dispatch(getSchedulePending());
      const result = await getScheduleList(config);
      console.log(result.data.data);
      dispatch(getScheduleFulfilled(result.data));
    } catch (error) {
      // console.log(error.response.data);
      dispatch(getScheduleRejected(error));
    }
  };
};

const getCinemaShowingPending = () => ({
  type: getCinemaShowing.concat(pending),
});

const getCinemaShowingRejected = (error) => ({
  type: getCinemaShowing.concat(rejected),
  payload: { error },
});

const getCinemaShowingFulfilled = (data) => ({
  type: getCinemaShowing.concat(fulfilled),
  payload: { data },
});

const getCinemaShowingThunk = (id, config) => {
  return async (dispatch) => {
    try {
      dispatch(getCinemaShowingPending());
      const result = await getCinemaShowingList(id, config);
      // console.log(result.data.data);
      dispatch(getCinemaShowingFulfilled(result));
    } catch (error) {
      // console.log(error.response.data);
      dispatch(getCinemaShowingRejected(error));
    }
  };
};

const cinemaActions = {
  getScheduleThunk,
  getCinemaShowingThunk,
};

export default cinemaActions;
