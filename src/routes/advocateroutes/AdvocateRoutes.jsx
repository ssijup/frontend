import React from 'react'
import BlankPageAdv from '../../pages/AdvocateDashboard/BlankPageAdv';
import AdvocateDashboard from '../../pages/AdvocateDashboard/AdvocateDashboard';
import AdvocateLayouts from '../../layouts/advocatelayouts/AdvocateLayouts'
import { Routes,Route } from 'react-router-dom';
function AdvocateRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/advocate' element={<AdvocateLayouts/>}>
            <Route index element={<AdvocateDashboard/>}/>
            <Route path='association' element={<BlankPageAdv/>}/>
            <Route path='lawfirm' element={<BlankPageAdv/>}/>
            <Route path='profile' element={<BlankPageAdv/>}/>
            </Route>

        </Routes>
      
    </div>
  )
}

export default AdvocateRoutes
