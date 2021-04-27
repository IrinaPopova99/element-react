import { useSelector } from "react-redux";

export const useErrors = (nameReducer) => {
    return useSelector((state) => state.authReducer.error);
}