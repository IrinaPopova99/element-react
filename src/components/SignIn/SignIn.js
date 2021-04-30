import React from 'react';
import { useForm, Controller } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import './SignIn.scss';
import TextFields from '../Common/TextFields/TextFields';
import SubmitButton from '../Common/SubmitButton/SubmitButton';
import { useDispatch, useSelector } from 'react-redux';
import { authUserReq } from '../../redux/authUser/actions';

const fields = [
    { name: 'username', label: 'Логин', type: 'text' },
    { name: 'password', label: 'Пароль', type: 'password' },
]

function SignIn() {
    const { register, handleSubmit, errors, control } = useForm();

    const dispatch = useDispatch();

    const onSubmit = data => {
        console.log(data);
        dispatch(authUserReq(data.username, data.password));
    }

    const isLoading = useSelector(state => state.authReducer.isLoading);

    return (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="on" className="form-sign-in">
            {fields.map((item, index) =>
                <TextFields
                    key={index}
                    name={item.name}
                    label={item.label}
                    control={control}
                    type={item.type}
                />
            )}
            <SubmitButton 
                disabled={isLoading} 
                type="submit"
            >
                {isLoading ? <CircularProgress /> : 'Войти'}
            </SubmitButton>
        </form>
    )
}

export default SignIn;
