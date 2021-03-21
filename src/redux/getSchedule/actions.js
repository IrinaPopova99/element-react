import { ScheduleAPI } from "../../api/ScheduleAPI";
import types from "./types";

const getSchedule = (data) => ({
    type: types.SET_SCHEDULE,
    payload: data
});

export const setSchedule = () => (dispatch) => {
    ScheduleAPI.setSchedule().then((data) => dispatch(getSchedule(data)));
}