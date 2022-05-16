import {combineReducers} from "redux";
import usersReducers from "./usersReducers";
import coursesReducers from "./coursesReducers";
import programsReducers from "./programsReducers";
import opinionsReducers from "./opinionsReducers";
export default combineReducers({
    usersReducers,
    coursesReducers,
    programsReducers,
    opinionsReducers
})