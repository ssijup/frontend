import React,{useEffect,useState} from 'react'
import '../../styles/netmagics/registrar.scss'
import DataTable from 'react-data-table-component'
import AddRegistrar from '../../components/netmagicsdashboard/registrarcomponent/AddRegistrar'
import { Columns} from '../../constants/netmagics/RegistrarData'
import axiosInstance from '../../configs/axios/AxiosVonfiguration'
function Registrar() {

   const[registrar,setRegistrar]=useState([])

   useEffect(()=>{
axiosInstance.get('registrar/list-registrar').then((response)=>{
   console.log("this is registrar",response.data);
   setRegistrar(response.data)
}).catch((error)=>{
   console.log(error);
})
   },[])



  return (
    <>
    <div className='registrar__container'>
     <div className="registrar__container__title">
        <h1 className='text-3xl font-bold'>Registrar</h1>
     </div>
     <div className="registrar__container__search">
        <input type="text" name="" id="" placeholder='search court' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  '/>
        {/* <i class='bx bx-search-alt'></i> */}
     </div>
     <div >
        <AddRegistrar/>
     </div>
    
    </div>
     <div className="list-court" style={{marginTop:'50px'}}>
     
     <DataTable
     columns={Columns}
     data={registrar}
     fixedHeader
     pagination>

     </DataTable>
     

  </div>
  </>
  )
}

export default Registrar
