import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Statistique',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
    }
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'Medecin',
    to: '/users',
    icon: 'cil-user',
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'Patient',
    to: '/patient',
    icon: 'cil-user',
  },

]

export default _nav
