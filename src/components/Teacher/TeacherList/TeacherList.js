import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setTeachers } from "../../../redux/getTeachers/actions";
import { Card, Icon, Image } from 'semantic-ui-react';
import TeacherProgramList from './TeachersProgramList';
import instagramIcon from './../../../assets/images/instagram.png';
import './TeacherList.css';

const TeacherList = () => {
    const dispatch = useDispatch();
    const teachers = useSelector((state) => state.teacherReducer.data);
    console.log(teachers);

    useEffect(() => {
        dispatch(setTeachers());
    }, [dispatch]);  

    return <div className="teacher-list container">
        <h2>Преподаватели</h2>
        <Card.Group>
            {teachers.map((teacher) => { 
                return( 
                    <Card>
                        <Image src={teacher.photo} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{teacher.first_name} {teacher.last_name}</Card.Header>
                            <Card.Description>
                                <TeacherProgramList programs={teacher.id_program} />
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <img src={instagramIcon} />
                            </a>
                        </Card.Content>
                    </Card>
                )}
            )}
        </Card.Group>
    </div>
}

export default TeacherList;