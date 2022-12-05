import { ActionType } from "redux-promise-middleware";
import { ACTION_STRING } from "./actionStrings";
import { getSchedule } from "../../modules/api/cinema";

const { Pending, Rejected, Fulfilled } = ActionType;

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
      const result = await getSchedule(config);
      // console.log(result.data.data);
      dispacth(getScheduleFulfilled(result.data));
    } catch (error) {
      // console.log(error.response.data);
      dispacth(getScheduleRejected(error));
    }
  };
};

const cinemaActions = {
  getScheduleThunk,
};

export default cinemaActions;
