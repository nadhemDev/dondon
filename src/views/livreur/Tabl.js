import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import {deletelivreur } from '../../Redux/Actions/Livreur';
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
const Tabl = ({ Livreurs: {livreurs} ,deletelivreur }) => {
    return (
        <div>
             <Table hover variant="pramiry" className='table table-hover table-outline '>
                <thead className="thead-light">
                    <tr>
                        <th><CIcon name="cil-basket" /> Livreur</th>
                        <th>Name</th>
                        <th>numero</th>
                        <th>adresse</th>
                        <th>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {livreurs && livreurs.map((livreurs, key) => (
                        <tr key={livreurs.id} livreurs={livreurs}>
                             <td>{livreurs && livreurs.id}</td>
                            <td>{livreurs && livreurs.nom}</td>
                            <td>{livreurs && livreurs.numero}</td>
                            <td>{livreurs && livreurs.adresse}</td>
                            <td>
                                <CButton className='InfoButton col-md-6 col-sm-8 col-xs-8' onClick={e=>deletelivreur(livreurs.id)} variant="outline" color="danger">Delete</CButton>
                            </td>
                        </tr>
                    )
                    )}
                </tbody>
            </Table>
        </div>
    )
}

Tabl.prototype = {
    Livreurs: PropTypes.object.isRequired,
    deletelivreur:PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    Livreurs: state.Livreurs,
    livreurs: state.livreurs
})
export default connect(mapStateToProps, { deletelivreur })(Tabl)
