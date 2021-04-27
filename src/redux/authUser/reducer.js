import types from "./types";

let initialState = {
    data: [],
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.AUTH_SUCCESS:
            return {
                ...state,
                ...state.data,
                data: action.payload,
                error: null,
            }
        case types.AUTH_ERROR:
        return {
            ...state,
            error: 'Неверный логин или пароль',
        }
        default: return state;
    }
}

export default authReducer;