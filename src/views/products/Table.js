import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import { deleteProduct,getOneProduct } from '../../Redux/Actions/Product';
import './Products.css';
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
import { Link } from 'react-router-dom';

const Tables = ({ Products: { products, uri }, deleteProduct }) => {
    return (
        <>
            <Table hover variant="pramiry" className='table table-hover table-outline '>
                <thead className="thead-light">
                    <tr>
                        <th><CIcon name="cil-basket" />  Products</th>
                        <th>Image </th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>prix</th>
                        <th>Categories</th>
                        <th>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products && products.map((products, key) => (
                        <tr key={products.id} products={products} >
                            <td>{products && products.id}</td>
                            <td><img src={products && uri+products.image}width='80px' height='60px' alt='product image' /></td>
                            <td>{products && products.productName}</td>
                            <td>{products && products.quantity}</td>
                            <td>{products && products.price}din TND</td>
                            <td>{products && products.category_id}</td>
                            <td>
                                <Link to={`/product/${products.id}`}>
                                    <CButton className='InfoButton col-md-6 col-sm-8 col-xs-8'onClick={e=>getOneProduct(products.id)}  variant="outline"  color="info"  >
                                        Details</CButton>
                                </Link>
                                <CButton className='InfoButton col-md-6 col-sm-8 col-xs-8' onClick={e=>deleteProduct(products.id)} variant="outline"  color="danger">Delete</CButton>
                            </td>
                        </tr>
                    )
                    )}
                </tbody>
            </Table>
        </>
    )
}

Tables.prototype = {
    Products: PropTypes.object.isRequired,
    deleteProduct:PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    Products: state.Products,
    products: state.products
})
export default connect(mapStateToProps, { deleteProduct })(Tables);


