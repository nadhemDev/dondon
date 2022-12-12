import axios from 'axios';
import {GET_USER, GET_USER_ERRORS, DELETE_USER} from '../Constants/Types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
// GET ALL User

export const getUsers = () => async dispatch => {
    try {
        const res = await axios.get('http://127.0.0.1:8000/api/User/all')
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    } catch (err)  {
        dispatch({
            type: GET_USER_ERRORS,
        })
    }
}

    // Delete User

    export const deleteUser = (UserID) => async dispatch => {
        try {
            const res = await axios.post(`http://127.0.0.1:8000/api/User/delete/${UserID}`)
            dispatch({
                type: DELETE_USER,
                payload: res.data
            })
            toast.info('User deleted'); 
        } catch (err) {
            const errors = err.response.data.errors;
            dispatch({
                type: GET_USER_ERRORS,
            })
            toast.error('Failed to deleted user'); 
    
        }
    }


  