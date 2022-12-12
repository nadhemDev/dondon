import {  GET_ALL_PATIENT, GET_ALL_ERR ,ADD_PATIENT  ,UPDATE_PATIENT , GET_PATIENT_BY_TraiT,  GET_PATIENT_BY_CAN, ERR_DELETE, ERR_PATIENT ,DELETE_PATIENT, GET_ONE_PATIENT , SEARCH_PATIENT} from '../Constants/Types';
import axios from 'axios' ;
import { toast } from 'react-toastify';


//Get All Patient
export const getPatient = () => async dispatch => {
  try {
      const res = await axios.get('http://127.0.0.1:8000/api/patient/all')
      console.log('patient',res.data.patient);
      dispatch({
          type: GET_ALL_PATIENT,
          payload: res.data.patient,
      })
  } catch (err)  {
      dispatch({
          type: GET_ALL_ERR,
      })
  }
}

//add Patient
export const addPatient = file => async dispatch => {
  const config = {
      headers:{
          'content-Type': 'multipart/form-data'
      }
  }
  try {
      const res = await axios.post(`http://127.0.0.1:8000/api/patient/create`,file,config)
      dispatch({
          type: ADD_PATIENT,
          payload: res.data
      })
      toast.info('Patient Added');
  }catch (err) {
      dispatch({
          type: ERR_PATIENT,
      });
      toast.error('Failed to Added');

  }
}

//delete patient
export const deletePatient = (patientID) => async dispatch => {
  try {
      const res = await axios.post(`http://127.0.0.1:8000/api/patient/delete/${patientID}`)
      dispatch({
          type: DELETE_PATIENT,
          payload: patientID
      })
       toast.info('Patient Deleted');
  }catch (err) {
      const errors = err.response.data.errors;
      dispatch({
          type: ERR_DELETE,
      });
      toast.error('product error');

  }
}
//get One Patient

export const getOnePatient = (patientID) => async dispatch => {
    try{
        const res = await axios.get(`http://127.0.0.1:8000/api/patient/pat/${patientID}`)

        console.log('....',res.data);

        dispatch({
            type: GET_ONE_PATIENT,
            payload: res.data
        })

    }catch{
        dispatch({
            type: ERR_PATIENT,
        })
    }
}


//Search Product
export const searchPatient = (formData) => async dispatch =>{
    const config = {
        headers: {
            'content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.post('http://127.0.0.1:8000/api/patient/Search',formData, config)
        console.log('lenovo',res.data);
        dispatch({
            type: SEARCH_PATIENT,
            payload: res.data,
        })
    }catch(err) {
        dispatch({
            types: ERR_PATIENT,
            payload: err.data
        })

    }

}
//Update Product
export const updatePatient = (patientID,file) => async dispatch => {
    const config = {
        headers:{
            'content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post(`http://127.0.0.1:8000/api/patient/edit/${patientID}`,file,config)
        console.log('ppppp',res.data);
        dispatch({
            type: UPDATE_PATIENT,
            payload: res.data
        })

        toast.info('Product updated');
    }catch (err) {
        const errors = err.response.data.errors;
        dispatch({
            type: ERR_PATIENT,
        });
        toast.error('Product error');
    }
}


//get One Patient by cancer

export const getCancer = (cancer_id) => async dispatch => {
    const config = {
        headers: {
            'content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post(`http://127.0.0.1:8000/api/patient/cancer`,{cancer_id},config)
        console.log('ttttttt',res.data)
        dispatch({
            type:  GET_ALL_PATIENT,
            payload:res.data,
            })
    }catch{

    }
}

export const getTrait = (traitement_id) => async dispatch => {
    const config = {
        headers: {
            'content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post(`http://127.0.0.1:8000/api/patient/`,{traitement_id},config)
        console.log('ttttttt',res.data)
        dispatch({
            type:  GET_PATIENT_BY_TraiT,
            payload:res.data,
            })
    }catch{

    }
}
