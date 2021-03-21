import types from "./types";

let initialState = {
    data: []
};

const teacherReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SET_TEACHER:
            return {
                ...state,
                ...state.data,
                data: action.payload
            }
        default: return state;
    }
}

export default teacherReducer;