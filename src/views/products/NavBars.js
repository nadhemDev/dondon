import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import {
    CNavbar,
    CForm,
    CInput,
    CButton,
    CCol
} from '@coreui/react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchProduct } from '../../Redux/Actions/Product';

const CNavbars = ({ searchProduct }) => {

    // eslint-disable-next-line
    const [productName, setText] = useState('');
  const history = useHistory()
    
    return (
        <>
            <CNavbar light color="light">
                <CForm inline onSubmit = {
                        e => {
                            e.preventDefault();
                            searchProduct({ productName });
                            setText('')
                        }
                    }>
                    <CCol xs={8}>
                        <CInput
                            className="mr-sm-5"
                            placeholder="Search"
                            size="sm-7"
                            name='productName'
                            value={productName}
                            onChange={
                                e => setText(e.target.value)
                            }
                             
            
             onClick={
                             () => {
                               history.push('/products')
                                }
                              }
                        />
                    </CCol>
                    <CButton color="outline-info" className="my-2 my-sm-0" type="submit">Search</CButton>
                </CForm>
            </CNavbar>
        </>
    )
}
CNavbars.prototype = {
    searchProduct: PropTypes.func.isRequired
}

export default connect(null, { searchProduct })(CNavbars)
