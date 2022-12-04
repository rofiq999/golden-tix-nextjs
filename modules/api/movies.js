import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const axiosRequest = (method, url, data, params) => {
  return axios({
    method,
    url: `${baseUrl}${url}`,
    data,
    params,
  });
};

export const getMovieShowing = (params) => {
  return axiosRequest("GET", "/api/movie/showing", params);
};

export const getMovieUpcoming = (params) => {
  return axiosRequest("GET", "/api/movie/upcoming", params);
};
