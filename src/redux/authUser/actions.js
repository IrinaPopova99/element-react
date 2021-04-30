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

const authLoading = (isLoading) => ({
    type: types.AUTH_LOADING,
    isLoading
})

export const authUserReq = (username, password) => (dispatch) => {
    dispatch(authLoading(true));
    AuthAPI.authUser(username, password)
        .then((data) => localStorage.setItem('username', username))
        .catch((data) => dispatch(authError(data)))
        .finally(() => dispatch(authLoading(false)));
}

export const logoutUserReq = () => (dispatch) => {
    dispatch(authLoading(true));
    AuthAPI.logoutUser(localStorage.getItem("refresh_token"))
        .then((data) =>console.log(data))
        .catch((data) => console.log(data))
        .finally(() => dispatch(authLoading(false)));
}