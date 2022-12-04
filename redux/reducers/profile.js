import { ActionType } from "redux-promise-middleware";
import { ACTION_STRING } from "../actions/actionStrings";

const initialState = {
    isError: false,
    isLoading: false,
    isFulfilled: false,
    error: null,
    profile: {
        image: null,
        fullName: null,
        username: null,
        firstName: null,
        lastName: null,
        phone: null,
        email: null,
    }
};

const profileReducer = (prevState = initialState, { type, payload }) => {
    const { Pending, Rejected, Fulfilled } = ActionType;
    const { profile, editImage } =
        ACTION_STRING;

    switch (type) {
        // profile
        case profile.concat("_", Pending):
            return {
                ...prevState,
                isLoading: true,
                isError: false,
                isFulfilled: false,
                error: null,
            };
        case profile.concat("_", Rejected):
            return {
                ...prevState,
                isLoading: false,
                isError: true,
                isFulfilled: false,
                error: payload.error.response.data.msg,
            };
        case profile.concat("_", Fulfilled):
            return {
                ...prevState,
                isError: false,
                isFulfilled: true,
                isLoading: false,
                error: null,
                profile: {
                    image: payload.data.data.image,
                    firstname: payload.data.data.first_name,
                    lastname: payload.data.data.last_name,
                    fullName: payload.data.data.full_name,
                    username: payload.data.data.username,
                    email: payload.data.data.email,
                    phone: payload.data.data.phone,
                },
            };

        //edit image
        case editImage.concat("_", Pending):
            return {
                ...prevState,
                isLoading: true,
                isError: false,
                isFulfilled: false,
            };
        case editImage.concat("_", Rejected):
            return {
                ...prevState,
                isLoading: false,
                isError: true,
                isFulfilled: false,
                error: payload.error.response.data.msg,
            };
        case editImage.concat("_", Fulfilled):
            return {
                ...prevState,
                isError: false,
                isFulfilled: true,
                isLoading: false,
            };

        default:
            return prevState;
    }
};

export default profileReducer;
