import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import { deletePatient,getCancer } from '../../Redux/Actions/Patient';
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

const Tables = ({ Patients: { patients}, deletePatient }) => {
    return (
        <>
            <Table hover variant="pramiry" className='table table-hover table-outline '>
                <thead className="thead-light">
                    <tr>
                        <th><CIcon name="cil-basket" /> Patients</th>
                        <th>Nom</th>
                        <th>Prenom </th>
                        <th>Date de naissance</th>
                        <th>Age Diagnostique</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {patients && patients.map((patients, key) => (
                        <tr key={patients.id} patients={patients} >
                            <td>{patients && patients.id}</td>
                            <td>{patients && patients.name}</td>
                            <td>{patients && patients.prenom}</td>
                            <td>{patients && patients.date_nai}</td>
                            <td>{patients && patients.age_diagnostique}</td>
                            <td>
                                <Link to={`/patient/${patients.id}`}>
                                    <CButton className='InfoButton col-md-6 col-sm-8 col-xs-8'onClick={e=>getCancer(patients.id)}  variant="outline"  color="info"  >
                                        Details</CButton>
                                </Link>
                                <CButton className='InfoButton col-md-6 col-sm-8 col-xs-8' onClick={e=>deletePatient(patients.id)} variant="outline"  color="danger">Delete</CButton>
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
    Patient: PropTypes.object.isRequired,
    deletePatient:PropTypes.func.isRequired,
    getCancer:PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    Patients: state.Patients,
    patients: state.patients
})
export default connect(mapStateToProps, { deletePatient  , getCancer})(Tables);


