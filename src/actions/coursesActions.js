import {ERROR_COURSE, GET_ALL_COURSES, LOAD_COURSE} from "../types/coursesTypes";
import axios from "axios";
const SERVER_URL = process.env["REACT_APP_SERVER_URL"];

export const getCoursesHome = () => async dispatch => {
    dispatch({
        type: LOAD_COURSE
    })
    try {
        const response = await axios.get(SERVER_URL + 'course/home');
        dispatch({
            type: GET_ALL_COURSES,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: ERROR_COURSE,
            payload: error.message
        })
    }

}