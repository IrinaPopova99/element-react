import React, { useState, useRef } from 'react';
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { InputAdornment, TextField, MenuItem, Select, FormGroup, FormControlLabel, Checkbox, FormControl, FormLabel } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import { errorMessages } from '../../utils/errorMessages';
import Checkboxes from './Checkboxes';
import { useListProgram } from '../../utils/useListProgram';
import './RegisterForm.scss';
import TextFields from '../Common/TextFields/TextFields';
import SubmitButton from '../Common/SubmitButton/SubmitButton';

// import ErrorMessages from '../Common/ErrorMessages/ErrorMessages';

const fields = [
    { name: 'code', label: 'Код', type: 'text' },
    { name: 'username', label: 'Логин', type: 'text' },
    { name: 'password', label: 'Пароль', type: 'password' },
    // {name: 'passwordCheck', label: 'Код', type: 'password'},
    { name: 'firstName', label: 'Имя', type: 'text' },
    { name: 'lastdName', label: 'Фамилия', type: 'text' },
    { name: 'instagram', label: 'Ссылка на истаграм', type: 'url' },
]

const RegisterForm = () => {
    const dispatch = useDispatch();
    const programs = useListProgram();
    const [error, setError] = useState();
    // const [program, setProgram] = useState({});
    const programRef = useRef({})

    const handleChange = (event) => {
        console.log('h')
        programRef.current = { ...programRef.current, [event.target.name]: event.target.checked };
        // setProgram({ ...program, [event.target.name]: event.target.checked });
        console.log(programRef.current)
    };

    // const handleChange = (event) => {
    //     setProgram(event.target.value);
    // };

    const { register, handleSubmit, errors, control } = useForm();

    const checkCheckboxes = (obj) => {
        for (let key in obj) {
            if (obj[key] === true) {
                setError(false);
                return true;
            }
        }
        setError(true)
        return false;
    }

    const onSubmit = data => {
        if (checkCheckboxes(data.programs)) {
            console.log(data);
        } else {
            console.log("Это обязательное поле")
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-regiter">
            {fields.map((item, index) => <TextFields key={index} name={item.name} label={item.label} control={control} type={item.type} />)}
            <div>
                <FormControl required error={error} component="fieldset" className="form-register__checkboxes">
                    <FormLabel component="legend">Выберите то, что вы ведете:</FormLabel>
                    {programs.map((item) => {
                        return (
                            <section id="input-checkbox" key={item.id}>
                                <Controller
                                    name="programs"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: props }) => {
                                        const itemName = item.name;
                                        return <Checkbox
                                            name={itemName}
                                            checked={programRef.current.itemName && null}
                                            onClick={handleChange}
                                            onChange={(e) => { return props.onChange(programRef.current); }}
                                        />
                                    }}
                                    defaultValue={programRef.current}
                                />
                                <label>{item.name}</label>
                            </section>
                        );
                    })}
                </FormControl>
            </div>
            <SubmitButton type="submit">Зарегистрироваться</SubmitButton>
        </form>
    )

}

export default RegisterForm