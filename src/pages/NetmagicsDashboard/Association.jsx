import React, { useEffect, useState } from 'react'
import '../../styles/netmagics/association.scss'

import DataTable from 'react-data-table-component'

import AddAssociation from '../../components/netmagicsdashboard/association-component/AddAssociation'
import { Columns } from '../../constants/netmagics/AssociationData'
import axiosInstance from '../../configs/axios/AxiosVonfiguration'
function Association() {
   const [data , setData]=useState([])

   useEffect(()=>{
      axiosInstance.get('/association/list').then((response)=>{
         console.log("association",response.data);
         setData(response.data)
      }).catch((error)=>{
         console.log(error);
      })
   },[])
   
  return (
    <>
    <div className='association__container'>
     <div className="association__container__title">
        <h1 className='text-3xl font-bold'>Association</h1>
     </div>
     <div className="association__container__search">
        <input type="text" name="" id="" placeholder='search court' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  '/>
        {/* <i class='bx bx-search-alt'></i> */}
     </div>
     <div >
        <AddAssociation/>
     </div>
    
    </div>
     <div className="list-court" style={{marginTop:'50px'}}>
     
     <DataTable
     columns={Columns}
     data={data}
     fixedHeader
     pagination>

     </DataTable>
     

  </div>
  </>
  )
}

export default  Association

