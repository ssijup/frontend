import React from 'react'
import './topnav.scss'
import UserInfo from '../userinfo/UserInfo'
import {data } from '../../../constants'
function TopNav() {
  const openSidebar = ()=>{
    document.body.classList.add('sidebar-open')
  }
  return (
    <div>
      <div className="topnav">
        <UserInfo user={data.user}/>
        <div className="sidebar-toggle" onClick={openSidebar}>
          <i className="bx bx-menu-alt-right"></i>
        </div>
      </div>
    </div>
  )
}

export default TopNav
