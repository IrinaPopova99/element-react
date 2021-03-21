import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import teacherReducer from "./getTeachers/reducer";
import programReducer from "./getPrograms/reducer";
import scheduleReducer from "./getSchedule/reducer";

const rootReducer = combineReducers({
    teacherReducer,
    programReducer,
    scheduleReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));