const INITIAL_STATE = {
    notes: []
}

export const noteReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_NOTES":
            return {...state, notes: action.payload}
        default:
            return state
    }
}