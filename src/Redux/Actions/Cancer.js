import { GET_PATIENT_BY_CAN  , GET_ERR , GET_ALL_CANCER} from '../Constants/Types';
import axios from 'axios' ;



  export const getCancer = (patientID) => async dispatch => {
    try{
        const res = await axios.get(`http://127.0.0.1:8000/api/patient/cancer/${patientID}`)
        console.log('cancer',res.data);
        dispatch({
            type: GET_PATIENT_BY_CAN,
            payload: res.data
        })
    }catch{
        dispatch({
            type: GET_ERR,
        })
    }
}

