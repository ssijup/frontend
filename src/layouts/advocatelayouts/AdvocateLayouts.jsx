import React from 'react'
import './advocate-layouts.scss'
import AdvocateSidebar from '../../components/advocateDashboard/advocateSidebar/AdvocateSidebar'
import AdvocateTopnav from '../../components/advocateDashboard/advocateTopnav/AdvocateTopnav'
import { Outlet } from 'react-router-dom'
function AdvocateLayouts() {
  return (
    <>
      <AdvocateSidebar />
    <div className="main">
      <div className="main__content">
     
          <AdvocateTopnav/>
          
          <Outlet />
      </div>
    </div>
    </>
  )
}

export default AdvocateLayouts
