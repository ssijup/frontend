import React from 'react'
import './mainlayout.scss'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/netmagicsdashboard/sidebar/Sidebar'
import TopNav from '../../components/netmagicsdashboard/topnav/TopNav'
// import NetmagicsRoute from '../../routes/netmagicsroutes/NetmagicsRoute'
function NetmagicsMainLayout() {
  return (
    <>
      <Sidebar/>
      <div className="main">
        <div className="main__content">
       
            <TopNav/>
            
            <Outlet/>
        </div>
      </div>
    </>
  )
}

export default NetmagicsMainLayout
