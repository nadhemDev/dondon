import {GET_ALL_CAROSEL, CAROSEL_ERR, ADD_CAROSEL,UPDATE_CAROSEL, DELEETE_CAROSEL,URI,GET_ONE_ACT } from '../Constants/Types';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

//GET All Carosel 
export const getCarosels = () => async dispatch => {
    try {
        const res = await axios.get(`http://127.0.0.1:8000/api/auth/Carosel/all`)
        console.log('GGG',res)
        dispatch({
            type: GET_ALL_CAROSEL,
            payload: res.data.carosel,
        })
        dispatch({
            type:URI,
            payload: res.data.path
        })
    }catch (err) {
        dispatch({
            type: CAROSEL_ERR,
        })
    }
}

//Add Carosels 
export const addCarosel = file => async dispatch => {
    const config = {
        headers:{
            'content-Type': 'multipart/form-data'
        }
    }
    console.table('ssssssswwww', file)
    try {
        const res = await axios.post(`http://127.0.0.1:8000/api/auth/Carosel/add`,file,config)
        console.table('ssssssswwww', file)
        
        console.log('AAAAA',res);
        dispatch({
            type: ADD_CAROSEL,
            payload: res.data
        }) 
        toast.info('Actualité  add');
    }catch (err) {
        const errors = err.response.data.errors;
        dispatch({
            type: CAROSEL_ERR,
        });
        toast.error('Error ')

    }
}
//Update Carosels
export const updateCarosel= (caroselID,file) => async dispatch => {
    const config = {
        headers:{
            'content-Type': 'application/json'
            
        }
    }
    try {
        const res = await axios.post(`http://127.0.0.1:8000/api/auth/Carosel/edit/${caroselID}`,file,config)
        console.log('$$$$$$', res.data)
        dispatch({
            type: UPDATE_CAROSEL,
            payload: res.data
        })
        toast.info('Actualité update successfully');
    }catch (err) {
        const errors = err.response.data.errors;
        dispatch({
            type: CAROSEL_ERR,
        });
        toast.error('update Failed')
    }
}
//Delete Carosels
export const deleteCarosel = (caroselID) => async dispatch => {
    try {
        const res = await axios.post(`http://127.0.0.1:8000/api/auth/Carosel/delete/${caroselID}`)
        dispatch({
            type: DELEETE_CAROSEL,
            payload: caroselID
        })
        toast.info('Actualité Deleted successfully');
    }catch (err) {
        const errors = err.response.data.errors;
        dispatch({
            type: CAROSEL_ERR,
        });
        toast.error('Delete Failed')

    }
}
//GET One carosel 
export const getOneCarosel = (caroselID) => async dispatch => {
    try{
        const res = await axios.get(`http://127.0.0.1:8000/api/auth/Carosel/show/${caroselID}`)
        console.log('ooooo',res.data.carosel);
        const uri = res.data.path
        dispatch({
            type: GET_ONE_ACT,
            payload:res.data.carosel,
        })
        dispatch({
            type:URI,
            payload: res.data.path
        })
    }catch{
        dispatch({
            type: CAROSEL_ERR,
        })
    }
}