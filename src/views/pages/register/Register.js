import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react';
import { Redirect } from 'react-router-dom';
import CIcon from '@coreui/icons-react';
import { signup } from '../../../Redux/Actions/Auth';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

const Register = ({ signup }) => {
  const [formData1, setFormData1] = useState({
    userName: '',
    email: '',
    password: '',
    password_confirmation: ''
  });
  const { userName, email, password, password_confirmation } = formData1;

  const onchange = e => setFormData1({ ...formData1, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    signup(userName, email, password, password_confirmation);
    e.target.reset();
  }
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={e =>onSubmit(e)}>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Username" autoComplete="username" name='userName' value={userName} onChange={e =>onchange(e)} />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Email" autoComplete="emai" name='email' value={email} onChange={e =>onchange(e)} />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend> 
                    <CInput type="password" placeholder="Password" autoComplete="new-password" name='password' value={password} onChange={e =>onchange(e)} />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Repeat password" autoComplete="new-password" name='password_confirmation' value={password_confirmation} onChange={e =>onchange(e)} />
                  </CInputGroup>
                  <CButton color="success" type="submit"  block>Create Account</CButton>
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
                <CRow>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-facebook mb-1" block><span>facebook</span></CButton>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-twitter mb-1" block><span>twitter</span></CButton>
                  </CCol>
                </CRow>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}
Register.propTypes = {
  signup: propTypes.func.isRequired,

}
export default connect(null, { signup }) (Register)
