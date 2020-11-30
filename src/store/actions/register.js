import axios from 'axios';
import { setAlert } from './alert'


import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from './types'



// REGISTER
// eslint-disable-next-line
export const register = (formData) => async dispatch => {
    dispatch({ type: REGISTER_START })
    try {
        const res = await axios.post(process.env.REACT_APP_API_URL + '/api/users', formData)

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })

        dispatch(setAlert(`Form successfully submitted`, 'success'))
    } catch (err) {
        const errors = err.response.data.errors
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type: REGISTER_FAIL
        })
    }
}


