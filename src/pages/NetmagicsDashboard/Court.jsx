import React, { useEffect,useState } from 'react'
import '../../styles/netmagics/court.scss'
import AddCourt from '../../components/netmagicsdashboard/courtcomponent/AddCourt'
import DataTable from 'react-data-table-component'
import { Columns} from '../../constants/netmagics/CourtData'
import axiosInstance from '../../configs/axios/AxiosVonfiguration'
function Court() {
const [court , setCourt]=useState([])

useEffect(()=>{
   axiosInstance.get('/association/court/list').then((response)=>{
      console.log(response.data);
      setCourt(response.data)
   }).catch((error)=>{
      console.log(error);
   })

},[])



  return (
    <>
    <div className='court__container'>
     <div className="court__container__title">
        <h1 className='text-3xl font-bold'>Court</h1>
     </div>
     <div className="court__container__search">
        <input type="text" name="" id="" placeholder='search court' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  '/>
        {/* <i class='bx bx-search-alt'></i> */}
     </div>
     <div >
        <AddCourt/>
     </div>

    </div>
     <div className="list-court" style={{marginTop:'50px'}}>
     
    <DataTable
     columns={Columns}
     data={court}
     fixedHeader
     pagination>

     </DataTable>
    
  </div>
  </>
  )
}

export default Court
