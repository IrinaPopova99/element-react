import { Table } from 'semantic-ui-react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setSchedule } from "../../redux/getSchedule/actions";
import { createScheduleDay } from './createScheduleDay';
import './ScheduleList.css'

const ScheduleList = () => {
    const dispatch = useDispatch();
    const schedule = useSelector((state) => state.scheduleReducer.data);
    
    useEffect(() => {
        dispatch(setSchedule());
    }, [dispatch]);
    
    const scheduleNew = {
        monday: createScheduleDay('1', schedule),
        tuesday: createScheduleDay('2', schedule),
        wednesday: createScheduleDay('3', schedule),
        thursday: createScheduleDay('4', schedule),
        friday: createScheduleDay('5', schedule),
        saturday: createScheduleDay('6', schedule),
    }

    return <>
    <div className="schedule-list container">
        <h2>Расписание</h2>
        
        <Table definition celled >
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell collapsing />
                    <Table.HeaderCell className="schedule-list-item">14:00</Table.HeaderCell>
                    <Table.HeaderCell className="schedule-list-item">15:00</Table.HeaderCell>
                    <Table.HeaderCell className="schedule-list-item">16:00</Table.HeaderCell>
                    <Table.HeaderCell className="schedule-list-item">17:00</Table.HeaderCell>
                    <Table.HeaderCell className="schedule-list-item">18:00</Table.HeaderCell>
                    <Table.HeaderCell className="schedule-list-item">19:00</Table.HeaderCell>
                    <Table.HeaderCell className="schedule-list-item">20:00</Table.HeaderCell>
                    <Table.HeaderCell className="schedule-list-item">21:00</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body >
                <Table.Row>
                    <Table.Cell className="schedule-list-item" collapsing >Понедельник</Table.Cell>
                    {scheduleNew.monday}
                </Table.Row>
                <Table.Row>
                    <Table.Cell className="schedule-list-item" collapsing >Вторник</Table.Cell>
                    {scheduleNew.tuesday}
                </Table.Row>
                <Table.Row>
                    <Table.Cell className="schedule-list-item" collapsing >Среда</Table.Cell>
                    {scheduleNew.wednesday}
                </Table.Row>
                <Table.Row>
                    <Table.Cell className="schedule-list-item" collapsing >Четверг</Table.Cell>
                    {scheduleNew.thursday}
                </Table.Row>
                <Table.Row>
                    <Table.Cell className="schedule-list-item" collapsing >Пятница</Table.Cell>
                    {scheduleNew.friday}
                </Table.Row>
                <Table.Row>
                    <Table.Cell className="schedule-list-item" collapsing >Суббота</Table.Cell>
                    {scheduleNew.saturday}
                </Table.Row>
            </Table.Body>
        </Table>
    </div>
    </>
}

export default ScheduleList;