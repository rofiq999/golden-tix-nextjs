import axios from "axios";
import auth from "../../redux/reducers/auth";

const config = (token) => {
    return {
        headers: {
            "x-access-token": token,
        },
    };
};
const baseUrl = `https://golden-tix-backend.vercel.app`;

export const login = (body) => axios.post(`${baseUrl}/api/auth/login`, body);

export const logout = (token) => axios.delete(`${baseUrl}/api/auth/logout`, config(token));

export const register = (body) =>
    axios.post(`${baseUrl}/api/auth/register`, body);

export const forgot = (body) =>
    axios.patch(`${baseUrl}/api/auth/forgot-password`, body);
