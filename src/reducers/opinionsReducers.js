import {ERROR_OPINION, GET_ALL_OPINIONS, LOAD_OPINION} from "../types/opinionsTypes";

const INITIAL_STATE = {
    opinions: [],
    load: false,
}

const opinionsReducers = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_ALL_OPINIONS:
            return{
                ...state,
                opinions: payload,
                load:false
            }
        case LOAD_OPINION:
            return {...state, load: true}
        case ERROR_OPINION:
            return {...state, error: payload, load: false}
        default :
            return state
    }
}
export default opinionsReducers