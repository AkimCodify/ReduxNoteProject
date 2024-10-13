import { asyncGetNotes } from "./asyncGetNotes";
import axios from "axios";

export const asyncEditNote = (id, filteredNote) => {
    try {
        return async (dispatch) => {
            await axios.put(`http://localhost:8000/notes/${id}`, filteredNote)
            dispatch(asyncGetNotes())
        }
    } catch (error) {
        console.error("Our error: ", error);
    }
}