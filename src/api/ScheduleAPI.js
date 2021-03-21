import instance from "./instance";

export const ScheduleAPI = {
    setSchedule() {
        return (
            instance.get(`schedule/`)
                .then((res) => { return res.data; })
        );
    }
};