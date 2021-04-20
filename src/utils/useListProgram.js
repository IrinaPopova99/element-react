import { useSelector } from "react-redux";

export const useListProgram = () => {
    return useSelector((state) => state.programReducer.data);
}