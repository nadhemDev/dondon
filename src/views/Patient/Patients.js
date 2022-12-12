import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPatient, getPatient } from "../../Redux/Actions/Patient";
import Table from "./Table";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { CCol, CRow } from '@coreui/react';
import { Card } from 'react-bootstrap';
import NavBars from './NavBars';

const Patients = ({ getPatient, addPatient , match}) => {
  useEffect(() => {
    getPatient(match.params.id);
  }, [getPatient]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  /***********************************/
  /***********************************/
  const [name, setName] = useState("");
  const [prenom, setPrenom] = useState("");
  const [date_nai, setDatenai] = useState("");
  const [age_diagnostique, setDia] = useState("");
  const [cancer_id, setCancer_id] = useState('')


  const onnamechange = (e) => {
    setName(e.target.value);
  };
  const onprenomchange = (e) => {
    setPrenom(e.target.value);
  };

  const ondatechange = (e) => {
    setDatenai(e.target.value);
  };

  const onage_diagnostiquechange = (e) => {
    setDia(e.target.value);
  };
  const onaconcerchange = (e) => {
    setCancer_id(e.target.value);
  };


  const submit = (e) => {
    e.preventDefault();
    const file = new FormData();
    file.append("name", name);
    file.append("prenom", prenom);
    file.append("date_nai", date_nai);
    file.append("age_diagnostique", age_diagnostique);
    file.append("cancer_id", cancer_id);
    addPatient(file);
    e.target.reset();
  };

  return (
    <div>
    <Card>
                <NavBars />
            </Card>
      <div className="pt-4 pb-4">
        <Button onClick={handleShow} variant="outline-primary">
          Add Patient
        </Button>
      </div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Patient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => submit(e)}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nom"
                name="name"
                value={name}
                onChange={onnamechange}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Prenom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Prenom"
                name="prenom"
                value={prenom}
                onChange={onprenomchange}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Date de naissance</Form.Label>
              <Form.Control
                type="text"
                placeholder="date"
                name="date_nai"
                value={date_nai}
                onChange={ondatechange}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Cancer</Form.Label>
              <Form.Control
                type="text"
                placeholder="cancer"
                name="cancer_id"
                value={cancer_id}
                onChange={onaconcerchange}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Date de naissance</Form.Label>
              <Form.Control
                type="text"
                placeholder="age de diagnostique"
                name="quantity"
                value={age_diagnostique}
                onChange={onage_diagnostiquechange}
              />
            </Form.Group>


            <CRow className="pt-2 pb-2">
              <CCol xs={9}>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </CCol>
              <CCol xs={3}>
                <Button variant="primary" onClick={handleClose} type="submit">
                  ADD
                </Button>
              </CCol>
            </CRow>
          </Form>
        </Modal.Body>
      </Modal>
      <Table />
    </div>
  );
};

Patients.prototype = {
  getPatient: PropTypes.func.isRequired,
  addPatient: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  Patients: state.Patients,
});
export default connect(mapStateToProps, { getPatient, addPatient })(Patients);
