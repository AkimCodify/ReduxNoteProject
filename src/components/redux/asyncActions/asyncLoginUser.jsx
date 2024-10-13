import axios from "axios"

export const asyncLoginUser = (loginnedUser) => {
    try {
        return async (dispatch) => {
            const {data} = await axios.post("http://localhost:8000/login", loginnedUser)
            localStorage.setItem('token', data.accessToken)
            dispatch({
                type: "LOGIN_USER",
                payload: data
            })
        }
    } catch (error) {
        console.error("Our error: ", error);
    }
}