import axios from "axios"

export const asyncRegisterUser = (newUser) => {
    try {
        return async (dispatch) => {
            const {data} = await axios.post("http://localhost:8000/register", newUser)
            localStorage.setItem('token', data.accessToken)
            dispatch({
                type: "REGISTER_USER",
                payload: data
            })
        }
    } catch (error) {
        console.error("Our error: ", error);
    }
}