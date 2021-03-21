import types from "./types";

let initialState = {
    data: []
};

const programReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SET_PROGRAM:
            return {
                ...state,
                ...state.data,
                data: action.payload
            }
        default: return state;
    }
}

export default programReducer;