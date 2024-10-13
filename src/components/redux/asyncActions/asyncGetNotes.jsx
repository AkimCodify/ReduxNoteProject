import axios from "axios";

export const asyncGetNotes = () => {
    try {
        return async (dispatch) => {
            let {data} = await axios.get("http://localhost:8000/notes")
            dispatch({
                type: "GET_NOTES",
                payload: data
            })
        }
    } catch (error) {
        console.error("Our error: ", error);
    }
}