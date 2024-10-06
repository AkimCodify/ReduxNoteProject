import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreatePage from '../pages/CreatePage';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/register' element={<RegisterPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
                <Route path='/create' element={<CreatePage/>}/>
            </Routes>
        </div>
    );
};

export default Routing;