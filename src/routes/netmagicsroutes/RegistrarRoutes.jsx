import React from 'react'
import BlankPage from '../../pages/RegistrarDashboard/BlankPage'
import RegistrarDashboard from '../../pages/RegistrarDashboard/RegistrarDashboard'
import RegistrarMainLayouts from '../../layouts/registrarlayouts/RegistrarMainLayouts'
import {Routes,Route} from 'react-router-dom';
function RegistrarRoutes() {
  return (
    <div>
       <Routes>
        <Route path='/registrar' element={<RegistrarMainLayouts />}>
          <Route index element={<RegistrarDashboard />} />
          <Route path='association' element={<BlankPage />} />
          <Route path='lawfirm' element={<BlankPage />} />
          <Route path='advocate' element={<BlankPage/>} />
          {/* <Route path='lawfirm' element={<BlankPage/>} />
          <Route path='advocate' element={<BlankPage/>} /> */}
        </Route>
      </Routes>
    </div>
  )
}

export default RegistrarRoutes
