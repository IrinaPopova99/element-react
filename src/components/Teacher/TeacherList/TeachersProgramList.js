const TeacherProgramList = (props) => {
    return <>
        {props.programs.map((program) => <span key={program.id}>{program.name} </span>)}
    </>
}

export default TeacherProgramList;