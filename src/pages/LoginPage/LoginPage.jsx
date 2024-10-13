import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { asyncLoginUser } from '../../components/redux/asyncActions/asyncLoginUser';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
    let [value1, setValue1] = useState('')
    let [value2, setValue2] = useState('')
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const handleLogin = () => {
        const userObj = {
            email: value1,
            password: value2
        }
        dispatch(asyncLoginUser(userObj))
        Navigate('/')
    }
    return (
        <div>
            {localStorage.getItem('token') ? <div className='s-box2'><p className='kl'>You already have an account!</p></div> : <div>
                <h1 className='s-title'>Log In</h1>
                <div className='s-box'>
                    <input 
                        type="email" 
                        placeholder='Email' 
                        className='s-input1' 
                        value={value1}
                        onChange={(e) => {setValue1(e.target.value)}}
                    />
                    <input 
                        type="password" 
                        placeholder='Password' 
                        className='s-input2' 
                        value={value2} 
                        onChange={(e) => {setValue2(e.target.value)}}
                    />
                    <button className='s-btn' onClick={handleLogin}>Submit</button>
                </div>
            </div>}
        </div>
    );
};

export default LoginPage;