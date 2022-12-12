import React, { useEffect } from 'react';
import { getUsers } from '../../Redux/Actions/User';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tables from './Tables';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { CCol, CRow } from '@coreui/react';

    
const Users = ({ getUsers }) => {
    useEffect(() => {
        getUsers();
    }, [getUsers]);
    return (
        <div>
            <Tables />
        </div>
    )
}

Users.prototype = {
    getUsers: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    Users: state.Users,

})

export default connect(mapStateToProps, { getUsers })(Users)
