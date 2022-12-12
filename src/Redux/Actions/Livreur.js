import axios from 'axios';
import {GET_ALL_LIVREUR,LIVREUR_ERR,ADD_LIVREUR,UPDATE_LIVREUR,DELEETE_LIVREUR} from '../Constants/Types';

//GET all livreur 
export const getLivreurs = () => async dispatch => {
    try {
        const res = await axios.get(`http://127.0.0.1:8000/api/auth/livreur/show`)
        console.log('****',res)
        dispatch({
            type: GET_ALL_LIVREUR,
            payload: res.data
        })
    }catch (err) {
        dispatch({
            type: LIVREUR_ERR,
        })
    }
}
//Add Livreur 
export const addLivreur = file => async dispatch => {
    const config = {
        headers:{
            'content-Type': 'multipart/form-data'
        }
    }
    try {
        const res = await axios.post(`http://127.0.0.1:8000/api/auth/livreur/create`,file,config)
        dispatch({
            type: ADD_LIVREUR,
            payload: res.data
        })
    }catch (err) {
        const errors = err.response.data.errors;
        dispatch({
            type: LIVREUR_ERR,
        });

    }
}
//Update Livreur
export const updatelivreur = (livreurID) => async dispatch => {
    const config = {
        headers:{
            'content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post(`http://127.0.0.1:8000/api/auth/livreur/edit/${livreurID}`,config)
        dispatch({
            type: UPDATE_LIVREUR,
            payload: res.data
        })
    }catch (err) {
        const errors = err.response.data.errors;
        dispatch({
            type: LIVREUR_ERR,
        });
    }
}
//delete livreur 
export const deletelivreur = (livreurID) => async dispatch => {
    try {
        const res = await axios.post(`http://127.0.0.1:8000/api/auth/livreur/delete/${livreurID}`)
        dispatch({
            type: DELEETE_LIVREUR,
            payload: livreurID
        })
    }catch (err) {
        const errors = err.response.data.errors;
        dispatch({
            type: LIVREUR_ERR,
        });

    }
}