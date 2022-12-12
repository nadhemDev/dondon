import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCarosel, getCarosels } from '../../Redux/Actions/Carosel';
import Ta from './Ta';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { CCol, CRow } from '@coreui/react';

const Carosels = ({ addCarosel, getCarosels }) => {
    useEffect(() => {
        getCarosels()
    }, [getCarosels])
    /***********************************/
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    /***********************************/
    /***********************************/
    const [image, setimage] = useState('')
    const [name_cat, setname_cat] = useState('')
    const onimagechange = e => {
        setimage(e.target.files[0])
    }
    const onname_catchange = e => {
        setname_cat(e.target.value)
    }
    const submit = e => {
        e.preventDefault();
        const file = new FormData();
        file.append('image', image);
        file.append('name_cat',name_cat);
        addCarosel(file)
        e.target.reset();
    } 
    /***********************************/
    return (
        <div>
            <div className='pt-4 pb-4'>
                <Button onClick={handleShow} variant="outline-primary" >Add Actualtié </Button>
            </div>
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Actualtié </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={e => submit(e)}>
                        <Form>
                        <Form.Label>Image Act</Form.Label>
                            <Form.File
                                id="custom-file"
                                label="Custom file input"
                                name="image"
                                custom
                                type= 'file'
                                onChange={onimagechange}
                            />
                        </Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Name act</Form.Label>
                            <Form.Control type="text" name="name" value={name_cat} onChange={onname_catchange} />
                        </Form.Group>
                        <CRow className='pt-2 pb-2'>
                            <CCol xs={9}>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </CCol>
                            <CCol xs={3}>
                                <Button variant="primary" onClick={handleClose} type='submit'>
                                    Add Actualtié  
                                </Button>
                            </CCol>
                        </CRow>
                    </Form>
                </Modal.Body>
            </Modal>
            <Ta />
        </div>
    )
}

Carosels.prototype = {
    getCarosels: PropTypes.func.isRequired,
    addCarosel: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    Carosels: state.Carosels,
})

export default connect(mapStateToProps, { getCarosels, addCarosel })(Carosels)
