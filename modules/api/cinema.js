import axios from "axios";

const baseUrl = `https://golden-tix-backend.vercel.app`;

export const getSchedule = (config) =>
  axios.get(`${baseUrl}/api/cinema/schedule`, config);
