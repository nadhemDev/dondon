import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS, REGISTER_FAIL, LOAD_USER, SET_CURRENT_USER} from '../Constants/Types';
import axios from 'axios' ;
import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';


//Login 
export const log = (email, password) => async dispatch => {
    const config = {
        headers: {
            'content-Type': 'application/json'
        }
    }
    const data = JSON.stringify({
        email,
        password,
    });
    try {
        axios.post('http://127.0.0.1:8000/api/auth/login', data, config).then((res) => {
            console.log('***', res);
            localStorage.setItem('user', res.data.access_token)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data.data
            });

            dispatch(
               loadUser()
                )

        }).catch((error) => {
            dispatch({
                type: LOGIN_FAIL,
            })
        });
    } catch (error) {

    }
}


export const setCurrentUser = (decoded) => {
    return{
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

//Register User
export const signup = (userName, email, password, password_confirmation) => async dispatch => {
    const config = {
        headers: {
            'content-Type': 'application/json'
        }
    }
    const data = JSON.stringify({
        userName,
        email,
        password,
        password_confirmation,
    })
    try {
        const res = await axios.post('http://127.0.0.1:8000/api/auth/signup', data, config)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
        })
    }
}
//Logout
export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    });
  
}


export const loadUser = () => async dispatch =>{
     const config = {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('user'),
                }
            }
            console.log('dddd',localStorage)
            try {
                const res = await axios.get('http://127.0.0.1:8000/api/user', config)
                dispatch({
                    type:LOAD_USER,
                    payload: res.data
                })
                 
            }catch{

            }
 }





