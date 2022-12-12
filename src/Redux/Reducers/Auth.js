
import  { LOGIN_SUCCESS, REGISTER_SUCCESS, LOAD_USER, LOGOUT, SET_CURRENT_USER } from '../Constants/Types';
const initialState = {
    isAuthenticated: null,
    loading: true,
    user: null,
    success :false,
}
// eslint-disable-next-line
export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                success: true,
                loading: false,
                isAuthenticated: true,
            }
        case SET_CURRENT_USER:
            return{
                isAuthenticated: true,
                user: payload
            }
        case REGISTER_SUCCESS:
            return{
                isAuthenticated: true
            }
        case LOAD_USER:
            return {
                ...state,
                user:payload,
                loading: false
            }
        case LOGOUT:
                localStorage.removeItem('user');
                return {
                    ...state, 
                    user:null,
                    isAuthenticated:null,
                    token: null,
                    loading: false,
                    success: true,
                }
        default:
            return state;
    }
}
