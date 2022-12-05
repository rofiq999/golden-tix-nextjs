import axios from "axios";

const baseUrl = `https://golden-tix-backend.vercel.app`;

export const getSeatList = () => axios.get(`${baseUrl}/api/booking/seats`);

export const getBookedList = (id) =>
  axios.get(`${baseUrl}/api/booking/seats/booked/${id}`);

export const postBooking = (body, config) =>
  axios.post(`${baseUrl}/api/booking/new`, body, config);
