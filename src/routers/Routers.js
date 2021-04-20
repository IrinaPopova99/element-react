import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from '../components/MainPage/MainPage';
import SignInUp from '../components/SignInUpPage/SignInUpPage';

function Routers() {
    return (
        <>
            <Route exact path="/" render={() => <MainPage /> } />
            <Route exact path="/signinup" render={() => <SignInUp /> } />
        </>
    )
}

export default Routers;
