import axios from "axios";
import auth from "../../redux/reducers/auth";


const baseUrl = `https://golden-tix-backend.vercel.app`;

export const login = (body) => axios.post(`${baseUrl}/api/auth/login`, body);

export const logout = () => axios.post(`${baseUrl}/api/auth/logout`);

export const register = (body) =>
    axios.post(`${baseUrl}/api/auth/register`, body);

export const forgot = (body) =>
    axios.patch(`${baseUrl}/api/auth/forgot-password`, body);
