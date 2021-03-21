import types from "./types";

let initialState = {
    data: []
};

const scheduleReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SET_SCHEDULE:
            return {
                ...state,
                ...state.data,
                data: action.payload
            }
        default: return state;
    }
}

export default scheduleReducer;