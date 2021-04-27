import { AuthAPI } from "../../api/AuthAPI";
import types from "./types";

const authSuccess = (data) => ({
    type: types.AUTH_SUCCESS,
    payload: data
});

const authError = (data) => ({
    type: types.AUTH_ERROR,
    error: data
});

export const authUserReq = (username, password) => (dispatch) => {
    AuthAPI.authUser(username, password)
        .then((data) =>console.log(data))
        .catch((data) => dispatch(authError(data)));
}

export const logoutUserReq = () => (dispatch) => {
    AuthAPI.logoutUser(localStorage.getItem("refresh_token"))
        .then((data) =>console.log(data))
        .catch((data) => console.log(data));
}