import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateCarosel, getOneCarosel } from '../../Redux/Actions/Carosel';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { CCol, CRow } from '@coreui/react';
import Modal from 'react-bootstrap/Modal';
import { Card } from 'react-bootstrap';
const SingleCarosel = ({ getOneCarosel, updateCarosel, Carosels: { carosel , uri }, match }) => {
      useEffect(() => {
    getOneCarosel(match.params.id);
  }, [getOneCarosel, match.params.id])


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  /***********************************/
  /***********************************/
  const [image, setimage] = useState('')
  const [name_cat, setname_cat] = useState('')
  const [id,setId]=useState('')
  const onimagechange = e => {
      setimage(e.target.files[0])
  }
  const onname_catchange = e => {
      setname_cat(e.target.value)
  }
  const handleShow = (id) => {
    console.log(id)
    setShow(true); setId(id)
  }       
  const submit = e => {
      e.preventDefault();
      const file = new FormData();
      file.append('image', image);
      file.append('name_cat',name_cat);
      updateCarosel(carosel.id,file)
      e.target.reset();
  } 
    return (
            <Container>
        <Row>
          <Col md={10}>
          </Col>
          <Col md={2}>
            <div className='pt-4 pb-4'>
              <Button onClick={e=>handleShow(getOneCarosel(carosel.id))} variant="outline-primary" >Update Product</Button>
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
                                <Button variant="primary" onClick={handleClose} type="submit">
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
  <Card.Header><h2>Actualité</h2></Card.Header>
  <Card.Body >
    <Card.Title> <h2>{carosel && carosel.name_cat}</h2></Card.Title>
  </Card.Body>
  
        <Col md={7}>
        </Col>
        <Col md={4}>
        <Card  style={{ width: '23rem' }}>
     <Card.Img  variant="top" width='50px' height="250px" src=
    {carosel && uri+carosel.image} />
   <Card.Body>
    <Card.Title></Card.Title>
  </Card.Body>
</Card>
</Col>      
</Card>
    </Container>
       
    )
}

SingleCarosel.prototype = {
    getOneCarosel: PropTypes.func.isRequired,
    Carosels: PropTypes.object.isRequired,
    updateCarosel:PropTypes.func.isRequired
}
  const mapStateToProps = state => ({
    Carosels: state.Carosels,
})
export default connect(mapStateToProps, {getOneCarosel,updateCarosel })(SingleCarosel)
