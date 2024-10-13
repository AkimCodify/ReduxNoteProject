const INITIAL_STATE = {
    token: "",
    currentUser: {}
}

export const usersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return { ...state, token: action.payload.accessToken, currentUser: action.payload.user };
        case "REGISTER_USER":
            return { ...state, token: action.payload.accessToken, currentUser: action.payload.user };
        default:
            return state
    }
}