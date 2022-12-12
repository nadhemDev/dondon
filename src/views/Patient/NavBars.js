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
import { searchPatient } from '../../Redux/Actions/Patient';

const CNavbars = ({ searchPatient }) => {

    // eslint-disable-next-line
    const [name, setText] = useState('');
  const history = useHistory()

    return (
        <>
            <CNavbar light color="light">
                <CForm inline onSubmit = {
                        e => {
                            e.preventDefault();
                            searchPatient({ name });
                            setText('')
                        }
                    }>
                    <CCol xs={8}>
                        <CInput
                            className="mr-sm-5"
                            placeholder="Search"
                            size="sm-7"
                            name='name'
                            value={name}
                            onChange={
                                e => setText(e.target.value)
                            }


             onClick={
                             () => {
                               history.push('/patient')
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
    searchPatient: PropTypes.func.isRequired
}

export default connect(null, { searchPatient })(CNavbars)
