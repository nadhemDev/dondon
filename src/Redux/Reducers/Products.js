import { ADD_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCTS, GET_ERRORS, GET_ONE_PRODUCT, SEARCH, UPDATE_PRODUCT, URI } from '../Constants/Types';
const initialState = {
    product: null,
    products: null,
    uri: null,
    loading: true
}
// eslint-disable-next-line
export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: payload,
                loading: false
            }
        case URI:
            return{
                ...state,
                uri:payload,
                loading:false
            }
        case GET_ERRORS:
        case GET_ONE_PRODUCT:
            return {
                ...state,
                product:payload,
                loading:false
            }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products ,payload],
                loading: false
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(products => products.id !== payload),
                loading: false
            }
        case SEARCH:
            return {
                ...state,
                products: payload,
            }
            case UPDATE_PRODUCT:
            return {
                ...state,
                product:payload,
                loading: false
            }
        default:
            return state;
    }
}