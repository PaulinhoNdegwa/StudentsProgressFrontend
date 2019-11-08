import * as types from '../actionTypes/studentsProgressTypes';

const initialState = {
    loading: false,
    students: [],
    loadingEmails: false
}

const studentsProgressReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.FETCH_STUDENTS_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case types.FETCH_STUDENTS_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                students: action.students
            }
        case types.FETCH_STUDENTS_DETAILS_FAILURE:
            return {
                ...state,
                loading: false
            }
        case types.SEND_PROGRESS_EMAILS_REQUEST:
            return {
                ...state,
                loadingEmails: true
            }
        case types.SEND_PROGRESS_EMAILS_SUCCESS:
            return {
                ...state,
                loadingEmails: false,
                message: action.message
            }
        case types.SEND_PROGRESS_EMAILS_FAILURE:
            return {
                ...state,
                loadingEmails: false
            }
        default:
            return state;
    }
}

export default studentsProgressReducer;