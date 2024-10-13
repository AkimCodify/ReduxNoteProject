import React, { useState } from 'react';
import './RegisterPage.css'
import { asyncRegisterUser } from '../../components/redux/asyncActions/asyncRegisterUser';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const handleRegister = () => {
        const newUserObj = {
            email: value1,
            password: value2
        }
        dispatch(asyncRegisterUser(newUserObj))
        Navigate('/')
    }
    return (
            <div>
                {localStorage.getItem('token') ? <div className='s-box2'><p className='kl'>You already have an account!</p></div> : <div>
                    <h1 className='s-title'>Sign Up</h1>
                    <div className='s-box'>
                        <input 
                            type="email" 
                            placeholder='Email' 
                            className='s-input1' 
                            onChange={(e) => {setValue1(e.target.value)}}
                            value={value1}
                        />
                        <input 
                            type="password" 
                            placeholder='Password' 
                            className='s-input2'
                            onChange={(e) => {setValue2(e.target.value)}}
                            value={value2}
                        />
                        <button className='s-btn' onClick={handleRegister}>Submit</button>
                    </div>
                </div>}
            </div>
    );
};

export default RegisterPage;