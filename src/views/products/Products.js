import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addProduct, getProducts} from '../../Redux/Actions/Product';
import Table from './Table';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import NavBars from './NavBars';
import { CCol, CRow } from '@coreui/react';
import { Card } from 'react-bootstrap';
const Products = ({ getProducts, addProduct }) => {
    useEffect(() => {
        getProducts()
    }, [getProducts])
    /***********************************/
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    /***********************************/
    /***********************************/
    const [productName, setname] = useState('')
    const [desc, setdescription] = useState('')
    const [category_id, setcategoryid] = useState('')
    const [price, setprice] = useState('')
    const [statut, setStatut] = useState('')
    const [quantity, setstock] = useState('')
    const [image, setimage] = useState('')
    const onnamechange = e => {
        setname(e.target.value)
    }
    const ondescchange = e => {
        setdescription(e.target.value)
    }

    const oncategorychange = e => {
        setcategoryid(e.target.value)
    }

    const onpricechange = e => {
        setprice(e.target.value)
    }

    const onstockchange = e => {
        setstock(e.target.value)
    }
    const onimagechange = e => {
        setimage(e.target.files[0])
    }
    const submit = e => {
        e.preventDefault();
        const file = new FormData();
        file.append('productName', productName);
        file.append('desc', desc);
        file.append('category_id', category_id);
        file.append('price', price);
        file.append('quantity', quantity);
        file.append('image', image);
        file.append('statut', 1);
        addProduct(file)
        e.target.reset();
    }
    /***********************************/
    return (
        <div>
            <Card>
                <NavBars />
            </Card>
            <div className='pt-4 pb-4'>
                <Button onClick={handleShow} variant="outline-primary" >Add Patient</Button>
            </div>
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={e => submit(e)}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="Product Name" name="productName" value={productName} onChange={onnamechange} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" placeholder="Price" name="price" value={price} onChange={onpricechange} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type="text" placeholder="Quantity" name="quantity" value={quantity} onChange={onstockchange} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} name="desc" value={desc} onChange={ondescchange} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Categories</Form.Label>
                            <Form.Control as="textarea" rows={3} name="category_id" value={category_id} onChange={oncategorychange} />
                        </Form.Group>
                        <Form>
                            <Form.File
                                id="custom-file"
                                label="Custom file input"
                                name="image"
                                custom
                                type= 'file'
                                onChange={onimagechange}
                            />
                        </Form>
                        <CRow className='pt-2 pb-2'>
                            <CCol xs={9}>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </CCol>
                            <CCol xs={3}>
                                <Button variant="primary" onClick={handleClose} type='submit'>
                                    Add Patient
                                </Button>
                            </CCol>
                        </CRow>
                    </Form>
                </Modal.Body>
            </Modal>
            <Table />
        </div>
    )
}

Products.prototype = {
    getProducts: PropTypes.func.isRequired,
    addProduct: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    Products: state.Products,
})

export default connect(mapStateToProps, { getProducts, addProduct })(Products)
