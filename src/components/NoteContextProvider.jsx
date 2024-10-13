// import axios from 'axios';
// import React, { createContext, useReducer } from 'react';
// import { useNavigate } from 'react-router-dom';

// export let NoteContext = createContext(null)

// const INITIAL_STATE1 = {
//     token: "",
//     currentUser: {}
// }

// const INITIAL_STATE2 = {
//     notes: []
// }

// const reducer2 = (state = INITIAL_STATE2, action) => {
//     switch (action.type) {
//         case "GET_NOTES":
//             return {...state, notes: action.payload}
//         default:
//             return state
//     }
// }

// const reducer1 = (state = INITIAL_STATE1, action) => {
//     switch (action.type) {
//         // case "GET_NOTES":
//         //     return {state, notes: action.payload}
//         case "LOGIN_USER":
//             return { ...state, token: action.payload.accessToken, currentUser: action.payload.user };
//         case "REGISTER_USER":
//             return { ...state, token: action.payload.accessToken, currentUser: action.payload.user };
//         default:
//             return state
//     }
// }

// const NoteContextProvider = ({children}) => {
//     const [state1, dispatch1] = useReducer(reducer1, INITIAL_STATE1)
//     const [state2, dispatch2] = useReducer(reducer2, INITIAL_STATE2)
//     const Navigate = useNavigate()
//     const getNotes = async () => {
//         try {
//             let {data} = await axios.get("http://localhost:8000/notes")
//             dispatch2({
//                 type: "GET_NOTES",
//                 payload: data
//             })
//             Navigate('/')
//         } catch (error) {
//             console.error("Our error: ", error);
//         }
//     }
//         const registerUser = async (newUser) => {
//         try {
//             const {data} = await axios.post("http://localhost:8000/register", newUser)
//             localStorage.setItem('token', data.accessToken)
//             dispatch1({
//                 type: "REGISTER_USER",
//                 payload: data
//             })
//             Navigate('/')
//         } catch (error) {
//             console.error("Our error: ", error);
//         }
//     }
//     const loginUser = async (loginnedUser) => {
//         try {
//             const {data} = await axios.post("http://localhost:8000/login", loginnedUser)
//             localStorage.setItem('token', data.accessToken)
//             dispatch1({
//                 type: "LOGIN_USER",
//                 payload: data
//             })
//         } catch (error) {
//             console.error("Our error: ", error);
//         }
//     }
//     const addNote = async (newNote) => {
//         try {
//             await axios.post("http://localhost:8000/notes", newNote)
//             getNotes()
//         } catch (error) {
//             console.error("Our error: ", error);
//         }
//     }
//     const deleteNote = async (id) => {
//         try {
//             await axios.delete(`http://localhost:8000/notes/${id}`)
//             getNotes()
//         } catch (error) {
//             console.error("Our error: ", error);
//         }
//     }
//     const EditNote = async (id, filteredNote) => {
//         try {
//             await axios.put(`http://localhost:8000/notes/${id}`, filteredNote)
//             getNotes()
//         } catch (error) {
//             console.error("Our error: ", error);
//         }
//     }
//     return (
//         <NoteContext.Provider value={{
//             notes: state2.notes,
//             token: state1.token,    
//             getNotes: getNotes,
//             registerUser: registerUser,
//             loginUser: loginUser,
//             addNote: addNote,
//             deleteNote: deleteNote,
//             EditNote: EditNote
//         }}>
//             {children}
//         </NoteContext.Provider>
//     );
// };

// export default NoteContextProvider;