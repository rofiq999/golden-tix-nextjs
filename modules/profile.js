import axios from "axios";

const baseUrl = `https://golden-tix-backend.vercel.app`;
export const editProfile = (token) => {
    return axios.get(`${baseUrl}/api/user/profile`, {
        headers: {
            'x-access-token': token
        },
    })
}
export const editImage = (token, body) => {
    return axios.patch(`${baseUrl}/api/user/profile/edit`, body, {
        headers: {
            'x-access-token': token
        },

    })

} 