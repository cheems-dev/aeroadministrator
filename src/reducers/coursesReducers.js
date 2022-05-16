import {ERROR_COURSE, GET_ALL_COURSES, GET_COURSE, LOAD_COURSE} from "../types/coursesTypes";

const INITIAL_STATE = {
    courses: [],
    load: false,
}

const coursesReducers = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_ALL_COURSES:
        case GET_COURSE:
            return {
                ...state,
                courses: payload,
                load: false
            }
        case LOAD_COURSE:
            return {...state, load: true}
        case ERROR_COURSE:
            return {...state, error: payload, load: false}
        default :
            return state
    }
}
export default coursesReducers