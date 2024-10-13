import { asyncGetNotes } from "./asyncGetNotes";
import axios from "axios";

export const asyncDeleteNote = (id) => {
    try {
        return async (dispatch) => {
            await axios.delete(`http://localhost:8000/notes/${id}`)
            dispatch(asyncGetNotes())
        } 
    } catch (error) {
        console.error("Our error: ", error);
    }
}