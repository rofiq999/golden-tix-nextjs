import { ACTION_STRING } from "./actionStrings";

import {
  getBookedList,
  postBooking,
  getSeatList,
} from "../../modules/api/booking";

const { postBook, getSeat, getBooked, pending, rejected, fulfilled } =
  ACTION_STRING;

const getSeatPending = () => ({
  type: getSeat.concat(pending),
});
const getSeatRejected = (error) => ({
  type: getSeat.concat(rejected),
  payload: { error },
});
const getSeatFulfilled = (data) => ({
  type: getSeat.concat(fulfilled),
  payload: { data },
});

const getSeatThunk = (cbSuccess, cbError) => {
  return async (dispatch) => {
    try {
      dispatch(getSeatPending());
      const result = await getSeatList();
      // console.log(result.data.data);
      dispatch(getSeatFulfilled(result));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      console.log(error.response);
      dispatch(getSeatRejected(error));
      typeof cbSuccess === "function" && cbError(error);
    }
  };
};

const postBookPending = () => ({
  type: postBook.concat(pending),
});
const postBookRejected = (error) => ({
  type: postBook.concat(rejected),
  payload: { error },
});
const postBookFulfilled = (data) => ({
  type: postBook.concat(fulfilled),
  payload: { data },
});

const postBookThunk = (body, config, cbSuccess, cbError) => {
  return async (dispatch) => {
    try {
      dispatch(postBookPending());
      const result = await postBooking(body, config);
      console.log(result.data.data);
      dispatch(postBookFulfilled(result));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      console.log(error);
      dispatch(postBookRejected(error));
      typeof cbSuccess === "function" && cbError(error);
    }
  };
};

const getBookedPending = () => ({
  type: getBooked.concat(pending),
});
const getBookedRejected = (error) => ({
  type: getBooked.concat(rejected),
  payload: { error },
});
const getBookedFulfilled = (data) => ({
  type: getBooked.concat(fulfilled),
  payload: { data },
});

const getBookedThunk = (id, cbSuccess, cbError) => {
  return async (dispatch) => {
    try {
      dispatch(getBookedPending());
      const result = await getBookedList(id);
      console.log(result.data.data);
      dispatch(getBookedFulfilled(result));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      console.log(error);
      dispatch(getBookedRejected(error));
      typeof cbSuccess === "function" && cbError(error);
    }
  };
};

const bookingAction = {
  getSeatThunk,
  postBookThunk,
  getBookedThunk,
};

export default bookingAction;
