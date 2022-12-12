import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import { deleteUser } from '../../Redux/Actions/User';
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
import { Link } from 'react-router-dom';

const Tables = ({ Users: { users }, deleteUser }) => {
    return (
        <>
            <Table hover variant="pramiry">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>User Name</th>
                        <th>email </th>
                        <th></th>
                        <th>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((users) => (
                        <tr key={users.id} users={users} >
                            <td>{users && users.id}</td>
                            <td>{users && users.userName}</td>
                            <td>{users && users.email} </td>
                            <td>
                            
                                <CButton className='InfoButton col-md-6 col-sm-8 col-xs-8' onClick={e=>deleteUser(users.id)} variant="outline" color="danger" >Delete</CButton>
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
    Users: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    Users: state.Users,
    users: state.users
})
export default connect(mapStateToProps, { deleteUser})(Tables);


