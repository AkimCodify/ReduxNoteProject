import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    const Navigate = useNavigate()
    return (
        <nav>
            <Link to='/' className='link'>Home</Link>
            <Link to='/login' className='link'>Login</Link>
            <Link to='/register'className='link'>Sign Up</Link>
            <Link to='/create' className='link'>Create A note</Link>
            <a className='link' href="#" onClick={(e) => {
                if (localStorage.getItem('token')) {
                    localStorage.removeItem('token') 
                    Navigate('/login')
                } else {
                    alert("You still dont have an account!")
                }
            }}>Log out</a>
        </nav>
    );
};

export default Navigation;