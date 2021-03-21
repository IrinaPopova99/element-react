import { TeacherAPI } from "../../api/TeacherAPI";
import types from "./types";

const getTeachers = (data) => ({
    type: types.SET_TEACHER,
    payload: data
});

export const setTeachers = () => (dispatch) => {
    TeacherAPI.setTeachers().then((data) => dispatch(getTeachers(data)));
}