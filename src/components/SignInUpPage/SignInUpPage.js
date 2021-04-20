import React from 'react';
import { Grid } from '@material-ui/core';
import Navbar from '../Navbar/Navbar';
import RegisterForm from '../RegisterForm/RegisterForm';
import './SignInUpPage.scss';
import SignIn from '../SignIn/SignIn';

function SignInUpPage() {
    return (
        <div>
            <div className="navbar-sign-page">
                <Navbar />
            </div>
            <Grid container justify="center" alignItems="center">
                <Grid className="block-register" container item xs={4} alignItems="center" justify="center" direction="column">
                    <h2>Зарегистрироваться</h2>
                    <RegisterForm />
                </Grid>
                <Grid container item xs={4} alignItems="center" justify="center" direction="column">
                    <h2>Войти</h2>
                    <SignIn />
                </Grid>
            </Grid>
        </div >
    )
}

export default SignInUpPage;
