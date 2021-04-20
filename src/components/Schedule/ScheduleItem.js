import React, { useState } from 'react';
import { Table, Button, Modal  } from 'semantic-ui-react';
import ScheduleForm from './ScheduleForm';
import './ScheduleItem.css';

const ScheduleItem = (props) => {
    const [open, setOpen] = useState(false);

    const openModalWindow = () => {
        setOpen(true);
        console.log(1)
    }
    
    const localData = props.data || null;
    return (
        <>
            <Table.Cell className={props.nameClass} onClick={openModalWindow}>
                {localData ?
                    <div>
                        <div className="item-text__first">
                            {localData.id_teacher.first_name} {localData.id_teacher.last_name}
                        </div>
                        <div className="item-text__second">
                            {localData.id_program.name}
                        </div>
                    </div>
                    : <div>Свободно</div>
                }
            </Table.Cell>
            <Modal open={open}>
                <Modal.Header>Изменить расписание</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <ScheduleForm 
                            firstName={localData ? localData.id_teacher.first_name : ''}
                            lastName={localData ? localData.id_teacher.last_name : ''}
                            nameProgram={localData ? localData.id_program.name : ''}
                            />
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={() => setOpen(false)}>
                        Отменить
                    </Button>
                    <Button
                        content="Сохранить"
                        labelPosition='right'
                        icon='checkmark'
                        onClick={() => setOpen(false)}
                        positive
                    />
                </Modal.Actions>
            </Modal>
        </>
    )
}

export default ScheduleItem;
