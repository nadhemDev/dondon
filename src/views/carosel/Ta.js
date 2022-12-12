import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import { deleteCarosel,getOneCarosel} from '../../Redux/Actions/Carosel';
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


const Ta = ({ Carosels: { carosels , uri}, deleteCarosel,getOneCarosel}) => {
    /***********************************/
    return (
        <div>
            <Table hover variant="pramiry" className='table table-hover table-outline '>
                <thead className="thead-light">
                    <tr>
                        <th><CIcon name="cil-basket" />Carosels</th>
                        <th>image</th>
                        <th>Name</th>
                        <th>
                        </th>
                    </tr>
                </thead>
                <tbody>
                         {carosels && carosels.map((carosels,key) => (
                        <tr key={carosels.id} carosels={carosels}>
                            <td>{carosels && carosels.id}</td>
                            <td><img src={carosels && uri+carosels.image}width='80px' height='60px' alt="carosel" /></td>
                            <td>{carosels && carosels.name_cat}</td>
                            <td>
                            <CButton className='InfoButton col-md-6 col-sm-8 col-xs-8' onClick={e=>deleteCarosel(carosels.id)} variant="outline"  color="danger">Delete</CButton>
                            <Link to={`/carosel/${carosels.id}`}>
                                    <CButton className='InfoButton col-md-6 col-sm-8 col-xs-8'onClick={e=>getOneCarosel(carosels.id)}  variant="outline"  color="info"  >
                                        Details</CButton>
                                </Link>
                            </td>
                         
                        </tr>
                    )
                    )}
                </tbody>
            </Table>
            </div>
        
    )
}

Ta.prototype = {
    Carosels: PropTypes.object.isRequired,
    deleteCarosel:PropTypes.func.isRequired,
    getOneCarosel:PropTypes.func.isRequired
   
}
const mapStateToProps = state => ({
    Carosels: state.Carosels,
    carosels: state.carosels
})
export default connect(mapStateToProps, { deleteCarosel,getOneCarosel})(Ta);