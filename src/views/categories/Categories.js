import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tab from './Tab';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { CCol, CRow } from '@coreui/react';
import {getCategories, addCategories} from '../../Redux/Actions/Categorie';
const Categories = ({getCategories, addCategories, match }) => {

    useEffect(() => {
        getCategories(match.params.id)
    }, [getCategories ])
    /****************************/
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    /***********************************/
    const [name, setname] = useState('')
    const [type, settype] = useState('')
    const onnamechange = e => {
        setname(e.target.value)
    }
    const ontypechange = e => {
       settype(e.target.value)
    }

   
    const submit = e => {
        e.preventDefault();
        const file = new FormData();
        file.append('name', name);
        file.append('type', type);
        addCategories(file)
        e.target.reset();
    }

    return (
        <div>
            
            <div className='pt-4 pb-4'>
                <Button onClick={handleShow} variant="outline-primary" >Add Categories</Button>
            </div>
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Categories</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={e => submit(e)}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Categories Name</Form.Label>
                            <Form.Control type="text" placeholder="name" name="name" value={name} onChange={onnamechange} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Type</Form.Label>
                            <Form.Control type="text" placeholder="type" name="type" value={type} onChange={ontypechange} />
                        </Form.Group>
                        <CRow className='pt-2 pb-2'>
                            <CCol xs={9}>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </CCol>
                            <CCol xs={3}>
                                <Button variant="primary" onClick={handleClose} type='submit'>
                                    Save
                                </Button>
                            </CCol>
                        </CRow>
                    </Form>
                </Modal.Body>
            </Modal>
            <Tab />
        </div>
    )
}
Categories.prototype = {
    getCategories: PropTypes.func.isRequired,
    addCategories: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    Categories: state.Categories,
})
export default connect(mapStateToProps, { getCategories, addCategories })(Categories)
