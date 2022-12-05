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

const config = (token) => {
  return {
    headers: {
      "x-access-token": token,
    },
  };
};

export const getMovieShowing = (params) => {
  return axiosRequest("GET", "/api/movie/showing", params);
};

export const getMovieUpcoming = (params) => {
  return axiosRequest("GET", "/api/movie/upcoming", params);
};

export const getMovieDetails = (token, params) => {
  return axios.get(`${baseUrl}${params}`, config(token));
};

export const createMovies = (token, data) => {
  return axiosRequest("POST", "/api/movie/new", config(token), data);
};
