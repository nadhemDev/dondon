import { GET_ALL_CANCER , GET_PATIENT_BY_CAN} from '../Constants/Types';
const initialState = {

    loading: true,
    cancer:null,
    cancers:null
}

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case GET_ALL_CANCER:
            return {
                ...state,
                cancer: payload,
                loading: false
            }
            case GET_PATIENT_BY_CAN:
                return {
                    ...state,
                    cancers: payload,
                    loading: false
                }
            default:
                return state;
        }
      }

