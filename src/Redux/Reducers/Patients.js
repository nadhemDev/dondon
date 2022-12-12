import { ERR_PATIENT, ADD_PATIENT, GET_ALL_PATIENT, GET_ONE_PATIENT , SEARCH_PATIENT, GET_PATIENT_BY_CAN} from '../Constants/Types';
const initialState = {
    patient: null,
    patients: null,
    loading: true,
    cancer:null
}
//Patient reducers
export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
      case GET_ALL_PATIENT:
          return {
              ...state,
              patients: payload,
              loading: false
          }
          case ERR_PATIENT:

              case SEARCH_PATIENT:
                return {
                    ...state,
                    patients: payload,
                }
                case ADD_PATIENT:
            return {
                ...state,
                patients: [...state.patients ,payload],
                loading: false
            }
            case GET_ONE_PATIENT:
              return {
                  ...state,
                  patient:payload,
                  loading:false
              }
              case GET_PATIENT_BY_CAN:
                return {
                    ...state,
                    cancer:payload,
                    loading:false
                }
      default:
          return state;
  }
}


