import axios from "axios";

const baseUrl = `https://golden-tix-backend.vercel.app`;

export const getScheduleList = (config) =>
  axios.get(`${baseUrl}/api/cinema/schedule`, config);

export const getCinemaShowingList = (id, config) =>
  axios.get(`${baseUrl}/api/cinema/showing/${id}`, config);
