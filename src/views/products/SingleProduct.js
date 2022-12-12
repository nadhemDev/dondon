import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getOneProduct, updateProduct } from "../../Redux/Actions/Product";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import NavBars from "./NavBars";
import { CCol, CRow } from "@coreui/react";
import Modal from "react-bootstrap/Modal";
import { Card } from "react-bootstrap";

const SingleProduct = ({
  getOneProduct,
  updateProduct,
  Products: { product, uri },
  match,
  loading,
}) => {
  useEffect(() => {
    getOneProduct(match.params.id);
  }, [getOneProduct, match.params.id]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  /***********************************/
  /***********************************/
  const [productName, setname] = useState("");
  const [id, setId] = useState("");
  const [desc, setdescription] = useState("");
  const [category_id, setcategoryid] = useState("");
  const [price, setprice] = useState("");
  const [statut, setStatut] = useState("");
  const [quantity, setstock] = useState("");
  const [image, setimage] = useState("");
  const onnamechange = (e) => {
    setname(e.target.value);
  };
  const ondescchange = (e) => {
    setdescription(e.target.value);
  };
  const oncategorychange = (e) => {
    setcategoryid(e.target.value);
  };
  const onpricechange = (e) => {
    setprice(e.target.value);
  };

  const onstockchange = (e) => {
    setstock(e.target.value);
  };
  const onimagechange = (e) => {
    setimage(e.target.files[0]);
  };
  const handleShow = (id) => {
    console.log(id);
    setShow(true);
    setId(id);
  };

  const submit = (e) => {
    e.preventDefault();
    const file = new FormData();
    file.append("productName", productName);
    file.append("desc", desc);
    file.append("category_id", category_id);
    file.append("price", price);
    file.append("quantity", quantity);
    file.append("image", image);
    file.append("statut", 1);
    updateProduct(product.id, file);
    e.target.reset();
  };

  return (
    <Container>
      <Row>
        <Col md={10}></Col>
        <Col md={2}>
          <div className="pt-4 pb-4">
            <Button
              onClick={(e) => handleShow(getOneProduct(product.id))}
              variant="outline-primary"
            >
              Update Product
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
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="productName"
                    value={productName}
                    onChange={onnamechange}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="text"
                    name="price"
                    value={price}
                    onChange={onpricechange}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={quantity}
                    name="quantity"
                    value={quantity}
                    onChange={onstockchange}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="desc"
                    value={desc}
                    onChange={ondescchange}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Catégories</Form.Label>
                  <Form.Control
                    type="text"
                    name="catégorie"
                    value={category_id}
                    onChange={oncategorychange}
                  />
                </Form.Group>

                <Form.File
                  id="custom-file"
                  label="Custom file input"
                  name="image"
                  custom
                  type="file"
                  onChange={onimagechange}
                />

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
                        updateProduct(product.id, FormData).then(() => {
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
          <h2>Product</h2>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {" "}
            <h2> {product && product.productName}</h2>
          </Card.Title>
          <Card.Text>Desc : {product && product.desc}</Card.Text>
          <Card.Text>Price : {product && product.price}$</Card.Text>
          <Card.Text>Quantity : {product && product.quantity}</Card.Text>
        </Card.Body>

        <Col md={7}></Col>
        <Col md={4}>
          <Card style={{ width: "23rem" }}>
            <Card.Img
              variant="top"
              width="50px"
              height="250px"
              src={product && uri + product.image}
            />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
              <Card.Text></Card.Text>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Card>
    </Container>
  );
};

SingleProduct.prototype = {
  getOneProduct: PropTypes.func.isRequired,
  Products: PropTypes.object.isRequired,
  updateProduct: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  Products: state.Products,
});
export default connect(mapStateToProps, { getOneProduct, updateProduct })(
  SingleProduct
);
