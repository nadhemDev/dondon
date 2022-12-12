import {GET_ALL_LIVREUR,LIVREUR_ERR,ADD_LIVREUR,UPDATE_LIVREUR,DELEETE_LIVREUR} from '../Constants/Types';
const initialState = {
    livreur: null,
    livreurs: null,
    loading: true
}
export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case GET_ALL_LIVREUR:
            return {
                ...state,
                livreurs: payload,
                loading: false
            }
            case LIVREUR_ERR:
                case ADD_LIVREUR:
                    return {
                        ...state,
                        livreurs: [...state.livreurs ,payload],
                        loading: false
                    }
                    case UPDATE_LIVREUR:
            return {
                ...state,
                livreurs: state.livreurs.filter(livreurs => livreurs.id !== payload),
                loading: false
            }

            default:
                return state;
        }

    }
