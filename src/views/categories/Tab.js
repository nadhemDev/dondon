import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import {deleteCategorie,updatecategories,getOneCatégorie} from '../../Redux/Actions/Categorie';
import {
    CBadge,
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CProgress,
    CRow,
    CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
const Tab = ({ Categories: {categories, categorie } ,deleteCategorie, updatecategories, loading, getOneCatégorie}) => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    
    /**************************************/
    
  	const [id,setId]=useState('')
    const [formData,setFormData]=useState({
       name:'',type:'' 
    })
    const {name,type}=formData
const handleShow = (id) => {
    console.log(id)
    setShow(true); setId(id)}  
  const updateCategories = async (id, name,type) => {
        updatecategories(id, name,type);
      
      };
    const submit = e => {
        e.preventDefault();
        const file = new FormData();
        file.append('name', name);
        file.append('type', type);
        updatecategories(file, categories.id)
        e.target.reset();
    }
    
      
    return (
        <div>
             <Table hover variant="pramiry" className='table table-hover table-outline '>
                <thead className="thead-light">
                    <tr>
                        <th><CIcon name="cil-basket" /> Categories</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {categories && categories?.map((categories) => (
                        <tr key={categories?.id} >
                            <td>{categories && categories?.id}</td>
                            <td>{categories && categories?.name}</td>
                            <td>{categories && categories?.type}</td>
                            <td>
                               
                                <CButton className='InfoButton col-md-6 col-sm-8 col-xs-8' onClick={e=>deleteCategorie(categories.id)} variant="outline" color="danger">Delete</CButton>
                                <Button  onClick={e=>handleShow(getOneCatégorie(categories.id))} variant="outline-primary" type='submit' className="InfoButton col-md-6 col-sm-8 col-xs-8">Update</Button>
                            </td>
                            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>update</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={e => submit(e=> {
                        e.preventDefault();
                       })}>
               
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Categories Name</Form.Label>
                            <Form.Control type="text" placeholder={categorie && categorie.name}  name="name" value={name}   onChange={(e) => setFormData({...formData,name:e.target.value})} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Type</Form.Label>
                            <Form.Control type="text" placeholder={categorie && categorie.type} name="type" value={type}   onChange={(e) => setFormData({...formData,type:e.target.value})}  />
                        </Form.Group>
                        <CRow className='pt-2 pb-2'>
                            <CCol xs={9}>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </CCol>
                            <CCol xs={3}>
                                <Button variant="primary" onClick={e=>{
                                updateCategories(id, formData).then(()=>{ setTimeout(()=>{
                                    window.location.reload()
                                },2000)});
                             
                                }}>
                                    Update
                                </Button>
                            </CCol>
                        </CRow>
                    </Form>
                </Modal.Body>
            </Modal> 
                        </tr>
                    )
                    )}
                </tbody>
            </Table>
        </div>
    )
}

Tab.prototype = {
    Categories: PropTypes.object.isRequired,
    deleteCategorie:PropTypes.func.isRequired,
    updatecategories:PropTypes.func.isRequired,
    getOneCatégorie:PropTypes.func.isRequired
  
   
}
const mapStateToProps = state => ({
    Categories: state.Categories,
    categories: state.categories
})
export default connect(mapStateToProps, { deleteCategorie, updatecategories,getOneCatégorie})(Tab);