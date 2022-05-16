import {ERROR_PROGRAM, GET_ALL_PROGRAMS, LOAD_PROGRAM} from "../types/programsTypes";

const INITIAL_STATE = {
    programs: [],
    load: false,
}

const programsReducers = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_ALL_PROGRAMS:
            return{
                ...state,
                programs: payload,
                load:false
            }
        case LOAD_PROGRAM:
            return {...state, load: true}
        case ERROR_PROGRAM:
            return {...state, error: payload, load: false}
        default :
            return state
    }
}
export default programsReducers