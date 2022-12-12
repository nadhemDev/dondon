import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tabl from './Tabl';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { CCol, CRow } from '@coreui/react';
import {getLivreurs, addLivreur} from '../../Redux/Actions/Livreur';
const Livreurs = ({getLivreurs, addLivreur }) => {

    useEffect(() => {
        getLivreurs()
    }, [getLivreurs])
    /****************************/
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    /***********************************/
    const [nom, setnom] = useState('')
    const [numero, setnumero] = useState('')
    const [adresse, setadresse] = useState('')
    const onnomchange = e => {
        setnom(e.target.value)
    }
    const onnumerochange = e => {
       setnumero(e.target.value)
    }
    const onadressechange = e =>{
        setadresse(e.target.value)
    }

   
    const submit = e => {
        e.preventDefault();
        const file = new FormData();
        file.append('nom', nom);
        file.append('numero', numero);
        file.append('adresse',adresse);
        addLivreur(file)
        e.target.reset();
    }

    return (
        <div>
            
            <div className='pt-4 pb-4'>
                <Button onClick={handleShow} variant="outline-primary" >Add Livreurs</Button>
            </div>
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Livreurs</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={e => submit(e)}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label> Livreur Name</Form.Label>
                            <Form.Control type="text" placeholder="nom" nom="nom" value={nom} onChange={onnomchange} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Numero</Form.Label>
                            <Form.Control type="text" placeholder="numero" name="numero" value={numero} onChange={onnumerochange} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>adresse</Form.Label>
                            <Form.Control type="text" placeholder="adresse" name="adresse" value={adresse} onChange={onadressechange} />
                        </Form.Group>
                        <CRow className='pt-2 pb-2'>
                            <CCol xs={9}>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </CCol>
                            <CCol xs={3}>
                                <Button variant="primary" onClick={handleClose} type='submit'>
                                    Add Livreur
                                </Button>
                            </CCol>
                        </CRow>
                    </Form>
                </Modal.Body>
            </Modal>
            <Tabl />
        </div>
    )
}
Livreurs.prototype = {
    getLivreurs: PropTypes.func.isRequired,
    addLivreur: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    Livreurs: state.Livreurs,
})
export default connect(mapStateToProps, { getLivreurs, addLivreur })(Livreurs)
