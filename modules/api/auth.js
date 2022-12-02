import axios from "axios";

const baseUrl = `https://golden-tix-backend.vercel.app`;

export const login = (body) => axios.post(`${baseUrl}/api/auth/login`, body);

export const logout = () => axios.post(`${baseUrl}/api/auth/logout`);
