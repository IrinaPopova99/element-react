import { Card, Icon, Image } from 'semantic-ui-react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setPrograms } from "../../redux/getPrograms/actions";
import './ProgramList.css';

const ProgramList = (props) => {
    const dispatch = useDispatch();
    const programs = useSelector((state) => state.programReducer.data);

    useEffect(() => {
        dispatch(setPrograms());
    }, [dispatch]); 

    return <div className="program-list container">
        <h2>Направления</h2>
        <Card.Group>
            {programs.map((program) => { 
                return( 
                    <Card>
                        <Image src={program.program_img} wrapped ui={false} />
                        <Card.Content >
                            <Card.Header>{program.name}</Card.Header>
                            <Card.Description>
                                {program.description}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                )}
            )}
        </Card.Group>
    </div>
}

export default ProgramList;