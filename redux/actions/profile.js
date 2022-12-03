import { ActionType } from "redux-promise-middleware";
import { ACTION_STRING } from "./actionStrings";
import { editProfile } from "../../modules/api/auth";

const { Pending, Rejected, Fulfilled } = ActionType;

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

const profileActions = {
    userThunk,
};

export default profileActions;
