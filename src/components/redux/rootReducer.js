import { combineReducers } from "redux";
import { noteReducer } from "./noteReducer";
import { usersReducer } from "./usersReducer";

export const rootReducer = combineReducers({
    usersReducer: usersReducer,
    noteReducer: noteReducer
})