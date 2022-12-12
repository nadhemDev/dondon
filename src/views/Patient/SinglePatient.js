import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getOnePatient,
  updatePatient,
  getCancer,
} from "../../Redux/Actions/Patient";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CCol, CRow } from "@coreui/react";
import Modal from "react-bootstrap/Modal";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const SinglePatient = ({
  updatePatient,
  getOnePatient,
  getCancer,
  Patients: { patient, patients },
  match,
}) => {
  useEffect(() => {
    getOnePatient(match.params.id);
  }, [getOnePatient, match.params.id]);

  useEffect(() => {
    getCancer(match.params.id);
  }, [getCancer, match.params.id]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [name, setName] = useState("");
  const [prenom, setPrenom] = useState("");
  const [date_nai, setDatenai] = useState("");
  const [id, setId] = useState("");

  const [age_diagnostique, setDia] = useState("");
  const [cancer_id, setCancer_id] = useState("");

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

  const handleShow = (id) => {
    console.log(id);
    setShow(true);
    setId(id);
  };

  const submit = (e) => {
    e.preventDefault();
    const file = new FormData();
    file.append("name", name);
    file.append("prenom", prenom);
    file.append("date_nai", date_nai);
    file.append("age_diagnostique", age_diagnostique);
    file.append("cancer_id", cancer_id);
    updatePatient(patient.id, file);
    e.target.reset();
  };

  return (
    <Container>
      <Row>
        <Col md={10}></Col>
        <Col md={2}>
          <div className="pt-4 pb-4">
            <Button
              onClick={(e) => handleShow(getCancer(patient.id))}
              variant="outline-primary"
            >
              Update Patient
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
              <Modal.Title>Update Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={(e) => submit(e)}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Patient Nom</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={name}
                    onChange={onnamechange}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Patient Prenom</Form.Label>
                  <Form.Control
                    type="text"
                    name="prenom"
                    value={prenom}
                    onChange={onprenomchange}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Date de Naissance</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="date"
                    name="date"
                    value={date_nai}
                    onChange={ondatechange}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Age de diagnostique</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="age"
                    value={age_diagnostique}
                    onChange={onage_diagnostiquechange}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Catégories</Form.Label>
                  <Form.Control
                    type="text"
                    name="cancer"
                    value={cancer_id}
                    onChange={onaconcerchange}
                  />
                </Form.Group>

                <CRow className="pt-2 pb-2">
                  <CCol xs={9}>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </CCol>
                  <CCol xs={3}>
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={(e) => {
                        updatePatient(patient.id, FormData).then(() => {
                          setTimeout(() => {
                            window.location.reload();
                          }, 2000);
                        });
                      }}
                    >
                      Update
                    </Button>
                  </CCol>
                </CRow>
              </Form>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
      <Card>
        <Card.Header>
          <h2>Patient</h2>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {""}
            <span>Nom :</span> {patient && patient.name}
          </Card.Title>
          <Card.Text>
            <span>Prenom</span> : {patient && patient.prenom}
          </Card.Text>
          <Card.Text>
            <span>Age de Diagnostique</span> :{" "}
            {patient && patient.age_diagnostique}
          </Card.Text>
          <Card.Text>
            <span>Date de naissance</span> : {patient && patient.date_nai}
          </Card.Text>

          <Card.Title>
            {""}
            <span>Cancer Type :</span> {patients && patients.stade}
          </Card.Title>
          <Card.Text>
            <span>Position de cancer</span> : {patients && patients.postion}
          </Card.Text>
          <Card.Text>
            <span>Sympton</span> : {patients && patients.symptom}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

SinglePatient.prototype = {
  getOnePatient: PropTypes.func.isRequired,
  Patients: PropTypes.object.isRequired,
  updatePatient: PropTypes.func.isRequired,
  getCancer: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  Patients: state.Patients,
});
export default connect(mapStateToProps, {
  getOnePatient,
  updatePatient,
  getCancer,
})(SinglePatient);
