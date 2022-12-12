import {GET_ALL_CAROSEL, CAROSEL_ERR, ADD_CAROSEL,UPDATE_CAROSEL, DELEETE_CAROSEL, URI,GET_ONE_ACT } from '../Constants/Types';
const initialState = {
    carosel: null,
    carosels: null,
    uri: null,
    loading: true
}
export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case GET_ALL_CAROSEL:
            return {
                ...state,
                carosels: payload,
                loading: false
            }
            case URI:
                return{
                    ...state,
                    uri:payload,
                    loading:false
                }
            case CAROSEL_ERR:
                case ADD_CAROSEL:
                    return {
                        ...state,
                        carosels: [...state.carosels ,payload],
                        loading: false
                    }
                    case DELEETE_CAROSEL:
            return {
                ...state,
                carosels: state.carosels.filter(carosels => carosels.id !== payload),
                loading: false
            }
             case UPDATE_CAROSEL:
                 return{
                     ...state,
                     carosels:payload,
                     loading: false
                 }
                 case GET_ONE_ACT:
                    return {
                        ...state,
                        carosel:payload,
                        loading: false
                    }
            default:
                return state;     
        }
    }