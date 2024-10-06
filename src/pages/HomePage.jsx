import React, { useContext, useState } from 'react';
import { NoteContext } from '../components/NoteContextProvider';
import NoteItem from '../components/NoteItem/NoteItem';
import NotesList from '../components/NotesList';

const HomePage = () => {
    let {notes} = useContext(NoteContext)
    let [value, setValue] = useState('all')
    return (
        <div>
            <h1>Home</h1>
            <NotesList>
                {notes.map((el) => (
                    <>
                        <select value={value} onChange={(e) => {setValue(e.target.value)}} className='g'>
                            <option value="all">All</option>
                            <option value="important">Important</option>
                            <option value="notimportant">Not Important</option>
                        </select> 
                        {value === 'all' ? <NoteItem note={el} key={el.id}/> : ''}
                        {value === 'important' && el.sel === 'important' ? <NoteItem note={el} key={el.id}/> : ''}
                        {value === 'notimportant' && el.sel === 'notimportant' ? <NoteItem note={el} key={el.id}/> : ''}
                    </>
                    
                ))}
            </NotesList>
        </div>
    );
};

export default HomePage;