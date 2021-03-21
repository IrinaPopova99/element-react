const TeacherProgramList = (props) => {
    return <>
        {props.programs.map((program) => <span>{program.name} </span>)}
    </>
}

export default TeacherProgramList;