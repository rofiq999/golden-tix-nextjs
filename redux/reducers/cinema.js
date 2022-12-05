import { ACTION_STRING } from "../actions/actionStrings";

const initialState = {
  scheduleData: [],
  showingData: [],
  isLoading: false,
  isError: false,
  isFulfilled: false,
  error: null,
};

const cinemaReducer = (prevState = initialState, { payload, type }) => {
  switch (type) {
    case ACTION_STRING.getSchedule.concat(ACTION_STRING.pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case ACTION_STRING.getSchedule.concat(ACTION_STRING.rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        error: payload.error,
        scheduleData: [],
      };
    case ACTION_STRING.getSchedule.concat(ACTION_STRING.fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        scheduleData: payload.data.data,
      };

    case ACTION_STRING.getCinemaShowing.concat(ACTION_STRING.pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case ACTION_STRING.getCinemaShowing.concat(ACTION_STRING.rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        error: payload.error,
        scheduleData: [],
      };
    case ACTION_STRING.getCinemaShowing.concat(ACTION_STRING.fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        showingData: payload.data.data,
      };

    default:
      return prevState;
  }
};

export default cinemaReducer;
