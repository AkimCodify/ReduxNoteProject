import axios from "axios";
import { asyncGetNotes } from "./asyncGetNotes";

export const asyncAddNote = (newNote) => {
    try {
        return async (dispatch) => {
            await axios.post("http://localhost:8000/notes", newNote)
            dispatch(asyncGetNotes())
        }
    } catch (error) {
        console.error("Our error: ", error);
    }
}