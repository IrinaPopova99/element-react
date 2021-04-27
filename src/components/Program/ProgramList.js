import { Card, Image } from 'semantic-ui-react';
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { setPrograms } from "../../redux/getPrograms/actions";
import './ProgramList.css';
import { useListProgram } from '../../utils/hooks/useListProgram';

const ProgramList = (props) => {
    const dispatch = useDispatch();
    const programs = useListProgram();

    useEffect(() => {
        dispatch(setPrograms());
    }, [dispatch]); 

    const programsList = programs.map((program) => { 
        return( 
            <Card key={program.id}>
                <Image src={program.program_img} wrapped ui={false} />
                <Card.Content >
                    <Card.Header>{program.name}</Card.Header>
                    <Card.Description>
                        {program.description}
                    </Card.Description>
                </Card.Content>
            </Card>
        )}
    );

    return <div className="program-list container">
        <h2>Направления</h2>
        <Card.Group>
            {programsList}
        </Card.Group>
    </div>
}

export default ProgramList;