import instance from "./instance";

export const TeacherAPI = {
    setTeachers() {
        return (
            instance.get(`teacher/`)
                .then((res) => { return res.data; })
        );
    }
};