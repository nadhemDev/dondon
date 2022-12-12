import {GET_ALL_CATEGORIES, CATEGOGIRES_ERR, ADD_CATEGORIES,UPDATE_CATEGORIES, DELEETE_CATEGORIES, URI,GET_ONE_CAT} from '../Constants/Types';
const initialState = {
    categorie: null,
    categories: null,
    loading: true
}
export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case GET_ALL_CATEGORIES:
            return {
                ...state,
                categories: payload,
                loading: false
            }
            case CATEGOGIRES_ERR:
            case ADD_CATEGORIES:
                return {
                        ...state,
                        categories: [...state.categories ,payload],
                        loading: false
                    }
                    case DELEETE_CATEGORIES:
                return{
                ...state,
                categories: state.categories.filter(categories => categories.id !== payload),
                loading: false
            }
            case URI:
                return{
                    ...state,
                    uri:payload,
                    loading:false
                }
            case UPDATE_CATEGORIES:
                    return{
                        ...state,
                        categories:state.categories.filter(category=>category.id ===payload.id ? payload : category),
                        loading: false
                    }
            case GET_ONE_CAT:
                return {
                ...state,
                categorie: payload,
                loading: false
            }
            default:
                return state;
        }

    }
