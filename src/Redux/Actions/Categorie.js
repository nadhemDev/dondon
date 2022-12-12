import axios from 'axios';
import{GET_ALL_CATEGORIES,CATEGOGIRES_ERR,ADD_CATEGORIES,UPDATE_CATEGORIES, DELEETE_CATEGORIES, URI,GET_ONE_CAT} from '../Constants/Types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
//Get All Categories
export const getCategories = () => async dispatch => {
    try {
        const res = await axios.get(`http://127.0.0.1:8000/api/categorie/all`)
        console.log('****',res)
        dispatch({
            type: GET_ALL_CATEGORIES,
            payload: res.data
        })
     
    }catch (err) {
        dispatch({
            type: CATEGOGIRES_ERR,
        })
    }
}
//Add Categories 
export const addCategories = file => async dispatch => {
    const config = {
        headers:{
            'content-Type': 'multipart/form-data'
        }
    }
    try {
        const res = await axios.post(`http://127.0.0.1:8000/api/categorie/add`,file,config)
        dispatch({
            type: ADD_CATEGORIES,
            payload: res.data
        })
         toast.info('categorie add');
    }catch (err) {
        const errors = err.response.data.errors;
        dispatch({
            type: CATEGOGIRES_ERR,
        });
        toast.error('Error ')

    }
}
//Update Categories
export const updatecategories = (categorieID,formData ) => async dispatch => {
    const config = {
        headers:{
            'content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.put(`http://127.0.0.1:8000/api/categorie/edit/${categorieID}`,formData,config)
        console.log("update",res.data)
        dispatch({
            type: UPDATE_CATEGORIES,
            payload: res.data
        })
        toast.info('categorie Updated');
       
    }catch (err) {
        const errors = err.response.data.errors;
        dispatch({
            type: CATEGOGIRES_ERR,
        });
        toast.error('Error Updated')
    }
}
//Delete Categories
export const deleteCategorie = (categorieID) => async dispatch => {
    try {
        const res = await axios.post(`http://127.0.0.1:8000/api/categorie/delete/${categorieID}`)
        dispatch({
            type: DELEETE_CATEGORIES,
            payload: categorieID
        })
    }catch (err) {
        const errors = err.response.data.errors;
        dispatch({
            type: CATEGOGIRES_ERR,
        });

    }
}
//Get One Catégorie
export const getOneCatégorie = (categorieID) => async dispatch => {
    try{
        const res = await axios.get(`http://127.0.0.1:8000/api/categorie/show/${categorieID}`)
        console.log('....',res);
        dispatch({
            type: GET_ONE_CAT,
            payload:res.data
        })
    }catch{
        dispatch({
            type: CATEGOGIRES_ERR,
        })
    }
}