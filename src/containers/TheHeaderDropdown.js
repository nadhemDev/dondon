import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {logout} from '../Redux/Actions/Auth'
import { Link } from "react-router-dom"
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import './nav.css';

const TheHeaderDropdown = ({ logout}) => {

  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={'avatars/9.jpg'}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />Profile
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem >
        <Link to='/login'
            onClick={logout}
            className='rea'>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Lock Account
          </Link>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

TheHeaderDropdown.prototype ={
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({ auth: state.auth })
export default connect(mapStateToProps, { logout })(TheHeaderDropdown);
