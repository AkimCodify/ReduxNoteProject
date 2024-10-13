import React, { useState } from 'react';
import './NoteItem.css'
import { useDispatch } from 'react-redux';
import { asyncDeleteNote } from '../redux/asyncActions/asyncDeleteNote';
import { asyncEditNote } from '../redux/asyncActions/asyncEditNote';

const NoteItem = ({note}) => {
    const dispatch = useDispatch()
    const handleDelete = () => {
        let currentId = note.id
        dispatch(asyncDeleteNote(currentId))
    }
    const handleEdit = () => {
        let filteredNote = {
            name: value1,
            info: value2,
            sel: value3
        }
        let currentId = note.id
        dispatch(asyncEditNote(currentId, filteredNote))
        setShow(!show)
    }
    const [show, setShow] = useState(false)
    const [value1, setValue1] = useState(note.name)
    const [value2, setValue2] = useState(note.info)
    const [value3, setValue3] = useState(note.sel)
    return (
        <div className='n-box'>
            <div className='n-wrap'>
                <div className='name-wrap'>
                    <span className='n-name'>{note.name}</span>
                    <button className='deletebtn' onClick={handleDelete}>Delete</button>
                </div>
                <div className='sjk'>
                    <p className='n-info'>{note.info}</p>
                </div>
                <div className='jkl'><button onClick={(e) => {setShow(!show)}} className='asd'>Edit</button>
                {show ? 
                    <div className='jk'>
                        <input type="text" placeholder='Name' value={value1} onChange={(e) => {setValue1(e.target.value)}}/>
                        <input type="text" placeholder='Info' value={value2} onChange={(e) => {setValue2(e.target.value)}}/>
                        <select value={value3} onChange={(e) => {setValue3(e.target.value)}}>
                            <option value="important">Important</option>
                            <option value="notimportant">Not Important</option>
                        </select>
                        <button onClick={handleEdit}>Save</button>
                    </div>
                    : ''
                }</div>
            </div>
        </div>
    );
};

export default NoteItem;