import React from 'react'
import './registrar-mainlayout.scss'
import { Outlet } from 'react-router-dom'
import RgeistrarSidebar from '../../components/registrarDashboard/registrarsidebar/RgeistrarSidebar'
import RegistrarTopNav from '../../components/registrarDashboard/registrartopnav/RegistrarTopNav'
function RegistrarMainLayouts() {
  return (
    <>
      <RgeistrarSidebar />
      <div className="main">
        <div className="main__content">
       
            <RegistrarTopNav/>
            
            <Outlet/>
        </div>
      </div>
    </>
  )
}

export default RegistrarMainLayouts
