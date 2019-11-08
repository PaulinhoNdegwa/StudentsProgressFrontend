import axios from 'axios';
import { toast } from 'react-toastify';

import * as types from '../actionTypes/studentsProgressTypes';

const fetchDetailsRequest = () => ({
    type: types.FETCH_STUDENTS_DETAILS_REQUEST
})

const fetchDetailsSuccess = students => ({
    type: types.FETCH_STUDENTS_DETAILS_SUCCESS,
    students
})

const fetchDetailsFailure = () => ({
    type: types.FETCH_STUDENTS_DETAILS_FAILURE
})

const sendEmailsRequest = () => ({
    type: types.SEND_PROGRESS_EMAILS_REQUEST
})

const sendEmailsSuccess = message => ({
    type: types.SEND_PROGRESS_EMAILS_SUCCESS,
    message
})

const sendEmailsFailure = () => ({
    type: types.SEND_PROGRESS_EMAILS_FAILURE
})


export const fetchStudentDetails = () =>  dispatch => {
    dispatch(fetchDetailsRequest());
    axios.get('https://student-progress111.herokuapp.com/api/fetchDetails')
    .then(response => {
        console.log(response.data);
        if(response.status === 200) dispatch(fetchDetailsSuccess(response.data.students))
    })
    .catch(error => {
        console.log(error.request);
        dispatch(fetchDetailsFailure())
        toast.error("Error fetching student details. Try again later");
    })
}

export const sendProgressEmails = () =>  dispatch => {
    dispatch(sendEmailsRequest());
    axios.get('https://student-progress111.herokuapp.com/api/sendMail')
    .then(response => {
        console.log(response.data);
        if(response.status === 200) {
            dispatch(sendEmailsSuccess(response.data.message))
            toast.success(response.data.message);
        }
    })
    .catch(error => {
        console.log(error.request);
        dispatch(sendEmailsFailure())
        toast.error("Error sending emails. Try again later");
    })
}