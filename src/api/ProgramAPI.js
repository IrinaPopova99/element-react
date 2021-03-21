import instance from "./instance";

export const ProgramAPI = {
    setPrograms() {
        return (
            instance.get(`program/`)
                .then((res) => { return res.data; })
        );
    }
};