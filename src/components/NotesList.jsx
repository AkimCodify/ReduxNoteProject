import React from 'react';
import { Link } from 'react-router-dom';

const NotesList = ({children}) => {
    return (
        <div className='sd'>
            {localStorage.getItem('token') ? <>{children}</> : <div className='s-box2'><p className="kl">You still dont have an account! <Link to='/register' className='link1'>Sign Up</Link> or <Link className='link1' to='/login'>Log In</Link></p></div>}
        </div>
    );
};

export default NotesList;