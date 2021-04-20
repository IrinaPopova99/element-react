import { AuthAPI } from "../../api/AuthAPI";
import types from "./types";

const authSuccess = (data) => ({
    type: types.SET_PROGRAM,
    payload: data
});

export const authUserReq = (username, password) => (dispatch) => {
    AuthAPI.authUser(username, password)
        .then((data) =>console.log(data))
        .catch((data) => console.log(data));
}

export const logoutUserReq = () => (dispatch) => {
    AuthAPI.logoutUser(localStorage.getItem("refresh_token"))
        .then((data) =>console.log(data))
        .catch((data) => console.log(data));
}