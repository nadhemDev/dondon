import { GET_USER, DELETE_USER } from '../Constants/Types';
const initialState = {
    users:null,
    user:null,
    loading: true
}

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case GET_USER:
            return {
                ...state,
                users: payload,
                loading: false
            }
            case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== payload),
            }
        default:
            return state;
    }

}