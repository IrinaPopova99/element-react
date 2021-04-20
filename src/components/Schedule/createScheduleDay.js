import ScheduleItem from "./ScheduleItem";


export function createScheduleDay(numberDay, data) {
    let dayClasses = [];
    for (let i = 0; i < 8; i++) {
        dayClasses.push( <ScheduleItem nameClass="schedule-list-item free" />);
    }

    data.map(classItem => {
        if (classItem.week_day == numberDay) {
            switch (classItem.class_time) {
                case '14:00:00': {
                    dayClasses[0] = <ScheduleItem nameClass="schedule-list-item" data={classItem} />
                    break;
                    }
                case '15:00:00': {
                    dayClasses[1] = <ScheduleItem nameClass="schedule-list-item" data={classItem} />
                    break;
                    }
                case '16:00:00': {
                    dayClasses[2] = <ScheduleItem nameClass="schedule-list-item" data={classItem} />
                    break;
                    }
                case '17:00:00': {
                    dayClasses[3] = <ScheduleItem nameClass="schedule-list-item" data={classItem} />
                    break;
                    }
                case '18:00:00': {
                    dayClasses[4] = <ScheduleItem nameClass="schedule-list-item" data={classItem} />
                    break;
                }
                case '19:00:00': {
                    dayClasses[5] = <ScheduleItem nameClass="schedule-list-item" data={classItem} />
                    break;
                    }
                case '20:00:00': {
                    dayClasses[6] = <ScheduleItem nameClass="schedule-list-item" data={classItem} />
                    break;
                    }
                case '21:00:00': {
                    dayClasses[7] = <ScheduleItem nameClass="schedule-list-item" data={classItem} />
                    break;
                    }
                default:
                    return <ScheduleItem nameClass="schedule-list-item free" />
            }
        }
    })

    return dayClasses;
}