import { ActionType } from "redux-promise-middleware";
import { ACTION_STRING } from "./actionStrings";
import {
  getCinemaShowingList,
  getScheduleList,
} from "../../modules/api/cinema";

const { getSchedule, getCinemaShowing, Pending, Rejected, Fulfilled } =
  ActionType;

const getSchedulePending = () => ({
  type: ACTION_STRING.getSchedule.concat("_", Pending),
});

const getScheduleRejected = (error) => ({
  type: ACTION_STRING.getSchedule.concat("_", Rejected),
  payload: { error },
});

const getScheduleFulfilled = (data) => ({
  type: ACTION_STRING.getSchedule.concat("_", Fulfilled),
  payload: { data },
});

const getScheduleThunk = (config) => {
  return async (dispacth) => {
    try {
      dispacth(getSchedulePending());
      const result = await getScheduleList(config);
      // console.log(result.data.data);
      dispacth(getScheduleFulfilled(result.data));
    } catch (error) {
      // console.log(error.response.data);
      dispacth(getScheduleRejected(error));
    }
  };
};

const getCinemaShowingPending = () => ({
  type: ACTION_STRING.getCinemaShowing.concat("_", Pending),
});

const getCinemaShowingRejected = (error) => ({
  type: ACTION_STRING.getCinemaShowing.concat("_", Rejected),
  payload: { error },
});

const getCinemaShowingFulfilled = (data) => ({
  type: ACTION_STRING.getCinemaShowing.concat("_", Fulfilled),
  payload: { data },
});

const getCinemaShowingThunk = (id, config) => {
  return async (dispacth) => {
    try {
      dispacth(getCinemaShowingPending());
      const result = await getCinemaShowingList(id, config);
      // console.log(result.data.data);
      dispacth(getCinemaShowingFulfilled(result.data));
    } catch (error) {
      // console.log(error.response.data);
      dispacth(getCinemaShowingRejected(error));
    }
  };
};

const cinemaActions = {
  getScheduleThunk,
  getCinemaShowingThunk,
};

export default cinemaActions;
