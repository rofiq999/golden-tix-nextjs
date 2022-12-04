import { ActionType } from "redux-promise-middleware";
import { ACTION_STRING } from "./actionStrings";
import { editProfile, editImage } from "../../modules/profile";


const { Pending, Rejected, Fulfilled, } = ActionType;

// Get id user
const profilePending = () => ({
    type: ACTION_STRING.profile.concat("_", Pending),
});
const profileRejected = (error) => ({
    type: ACTION_STRING.profile.concat("_", Rejected),
    payload: { error },
});
const profileFulfilled = (data) => ({
    type: ACTION_STRING.profile.concat("_", Fulfilled),
    payload: { data },
});

// edit Image
const imagePending = () => ({
    type: ACTION_STRING.editImage.concat("_", Pending),
});
const imageRejected = (error) => ({
    type: ACTION_STRING.editImage.concat("_", Rejected),
    payload: { error },
});
const imageFulfilled = (data) => ({
    type: ACTION_STRING.editImage.concat("_", Fulfilled),
    payload: { data },
});

const userThunk = (token) => {
    return async (dispacth) => {
        try {
            dispacth(profilePending());
            const result = await editProfile(token);
            dispacth(profileFulfilled(result.data));
            // if (typeof router === "function") router();
        } catch (error) {
            console.log(error);
            dispacth(profileRejected(error));
        }
    };
};

const imageThunk = (token, body, cbSuccess, cbError) => {
    return async (dispacth) => {
        try {
            dispacth(imagePending());
            const result = await editImage(token, body);
            dispacth(imageFulfilled(result.data));
            typeof cbSuccess === "function" && cbSuccess();
        } catch (error) {
            console.log(error);
            dispacth(imageRejected(error));
            typeof cbSuccess === "function" && cbError(error);
        }
    };
};

const profileActions = {
    userThunk,
    imageThunk,
};

export default profileActions;
