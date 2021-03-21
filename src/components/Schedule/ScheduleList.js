import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setSchedule } from "../../redux/getSchedule/actions";

const ScheduleList = () => {
    const dispatch = useDispatch();
    const schedule = useSelector((state) => state.scheduleReducer.data);

    useEffect(() => {
        dispatch(setSchedule());
    }, [dispatch]);  
    const scheduleNew = {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
    }
    // props.schedule.forEach(element => {
    //     switch(item.week_day) {
    //         case 'MONDAY':
    //             scheduleNew.monday.
    //     }
    // });
        
    return <div className="schedule-list container">
        <h2>Расписание</h2>
        
        <Table definition celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell collapsing />
                    <Table.HeaderCell>15:00</Table.HeaderCell>
                    <Table.HeaderCell>16:00</Table.HeaderCell>
                    <Table.HeaderCell>17:00</Table.HeaderCell>
                    <Table.HeaderCell>18:00</Table.HeaderCell>
                    <Table.HeaderCell>19:00</Table.HeaderCell>
                    <Table.HeaderCell>20:00</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <Table.Row>
                    <Table.Cell collapsing >Понедельник</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell collapsing >Вторник</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell collapsing >Среда</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell collapsing >Четверг</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell collapsing >Пятница</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell collapsing >Суббота</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    </div>
}

export default ScheduleList;