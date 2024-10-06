import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NoteContext } from '../components/NoteContextProvider';

const CreatePage = () => {
    let [value1, setValue1] = useState('')
    let [value2, setValue2] = useState('')
    let [value3, setValue3] = useState('important')
    const Navigate = useNavigate()
    const {addNote} = useContext(NoteContext)
    const handleAdd = () => {
        const newNoteObj = {
            name: value1,
            info: value2,
            sel: value3
        }
        addNote(newNoteObj)
        Navigate('/')
    }
    return (
        <div>
            {localStorage.getItem('token') ? <div><h1 className='s-title'>Create a Note</h1>
            <div className='s-box'>
                <input type="email" placeholder='Name' className='s-input1' value={value1} onChange={(e) => {
                    setValue1(e.target.value)
                }}/>
                <input type="text" placeholder='Info' className='s-input2' value={value2} onChange={(e) => {
                    setValue2(e.target.value)
                }}/>
                <select className='s-input1' value={value3} onChange={(e) => {setValue3(e.target.value)}}>
                    <option value="important">Important</option>
                    <option value="notimportant">Not Important</option>
                </select>
                <button className='s-btn' onClick={handleAdd}>Submit</button>
            </div></div> : <div className='s-box2'><p className='kl'>You still dont have an account! <Link to='/register' className='link1'>Sign up</Link> or <Link className='link1' to='/login'>Log In</Link></p></div>}
        </div>
    );
};

export default CreatePage;