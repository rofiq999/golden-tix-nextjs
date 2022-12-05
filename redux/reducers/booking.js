import { ACTION_STRING } from "../actions/actionStrings";

const initialState = {
  seatData: [],
  bookedData: [],
  isLoading: false,
  isError: false,
  isFulfilled: false,
  error: null,
};

const bookingReducer = (prevState = initialState, { payload, type }) => {
  switch (type) {
    case ACTION_STRING.getSeat.concat(ACTION_STRING.pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case ACTION_STRING.getSeat.concat(ACTION_STRING.rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        error: payload.error,
      };
    case ACTION_STRING.getSeat.concat(ACTION_STRING.fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        seatData: payload.data.data,
      };

    case ACTION_STRING.postBook.concat(ACTION_STRING.pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case ACTION_STRING.postBook.concat(ACTION_STRING.rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        error: payload.error,
      };
    case ACTION_STRING.postBook.concat(ACTION_STRING.fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        // seatData: payload.data.data,
      };

    case ACTION_STRING.getBooked.concat(ACTION_STRING.pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case ACTION_STRING.getBooked.concat(ACTION_STRING.rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        error: payload.error,
      };
    case ACTION_STRING.getBooked.concat(ACTION_STRING.fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        bookedData: payload.data.data,
      };

    default:
      return prevState;
  }
};

export default bookingReducer;
