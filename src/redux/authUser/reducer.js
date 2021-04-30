import types from "./types";

let initialState = {
    data: null,
    error: null,
    isLoading: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.AUTH_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null,
            }
        case types.AUTH_ERROR:
            return {
                ...state,
                data: null,
                error: 'Неверный логин или пароль',
            }
        case types.AUTH_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            }
        default: return state;
    }
}

export default authReducer;