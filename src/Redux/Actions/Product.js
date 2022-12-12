import { GET_ALL_PRODUCTS, GET_ERRORS, SEARCH, ERROR_SEARCH, GET_ONE_PRODUCT, PRODUCT_ERROR, ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT, URI } from '../Constants/Types';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

//Get All Products 
export const getProducts = () => async dispatch => {
    try {
        const res = await axios.get('http://127.0.0.1:8000/api/product/all')
        const uri = res.data.path
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: res.data.product,
        })
        dispatch({
            type:URI,
            payload: res.data.path
        })
    } catch (err)  {
        dispatch({
            type: GET_ERRORS,
        })
    }
}

//Search Product
export const searchProduct = (formData) => async dispatch =>{
    const config = {
        headers: {
            'content-Type': 'application/json'
        }
    }
     
    try {
        const res = await axios.post('http://127.0.0.1:8000/api/product/Search',formData, config)
        console.log('lenovo',res.data);
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: res.data,
        })
    }catch(err) {
        dispatch({
            types: ERROR_SEARCH,
            payload: err.data
        })
        
    }

}

//Get One Product 
export const getOneProduct = (productID) => async dispatch => {
    try{
        const res = await axios.get(`http://127.0.0.1:8000/api/product/show/${productID}`)
        console.log(res.data.product);
        const uri = res.data.path
        dispatch({
            type: GET_ONE_PRODUCT,
            payload:res.data.product,
        })
        dispatch({
            type:URI,
            payload: res.data.path
        })
    }catch{
        dispatch({
            type: GET_ERRORS,
        })
    }
}


//Add Product 
export const addProduct = file => async dispatch => {
    const config = {
        headers:{
            'content-Type': 'multipart/form-data'
        }
    }
    try {
        const res = await axios.post(`http://127.0.0.1:8000/api/product/create`,file,config)
        dispatch({
            type: ADD_PRODUCT,
            payload: res.data
        })
        toast.info('Product Added'); 
    }catch (err) {
        const errors = err.response.data.errors;
        dispatch({
            type: PRODUCT_ERROR,
        });
        toast.error('Failed to Added'); 

    }
}

//Delet Product 
export const deleteProduct = (productID) => async dispatch => {
    try {
        const res = await axios.post(`http://127.0.0.1:8000/api/product/delete/${productID}`)
        dispatch({
            type: DELETE_PRODUCT,
            payload: productID
        })
         toast.info('Product Deleted');
    }catch (err) {
        const errors = err.response.data.errors;
        dispatch({
            type: PRODUCT_ERROR,
        });
        toast.error('product error'); 

    }
}

//Update Product
export const updateProduct = (productID,file) => async dispatch => {
    const config = {
        headers:{
            'content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post(`http://127.0.0.1:8000/api/product/edit/${productID}`,file,config)
        console.log('ppppp',res.data);
        dispatch({
            type: UPDATE_PRODUCT,
            payload: res.data
        })
        toast.info('Product updated');
    }catch (err) {
        const errors = err.response.data.errors;
        dispatch({
            type: PRODUCT_ERROR,
        });
        toast.error('Product error'); 
    }
}
