import { ProgramAPI } from "../../api/ProgramAPI";
import types from "./types";

const getPrograms = (data) => ({
    type: types.SET_PROGRAM,
    payload: data
});

export const setPrograms = () => (dispatch) => {
    ProgramAPI.setPrograms().then((data) => dispatch(getPrograms(data)));
}