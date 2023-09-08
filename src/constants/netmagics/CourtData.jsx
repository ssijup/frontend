import EditCourt from '../../components/netmagicsdashboard/courtcomponent/EditCourt'
import axiosInstance from "../../configs/axios/AxiosVonfiguration";

export const  Columns = [
    {
      name: 'Court Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Type',
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: 'Edit',
      selector: (row) => (
        // <button className="bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
        //   Edit
        // </button>
        <EditCourt
        courtId={row.id}
        />
      ),
      sortable: false, 
    },
    {
      name: 'Delete',
      selector: (row) => (
        <button onClick={()=>handleDelete(row.id)} className="bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
      ),
      sortable: false,
    },
  ];
  const handleDelete =async(userid)=>{
    await axiosInstance.delete(`/association/court/delete-court/${userid}`).then((response)=>{
      console.log(response);
    }).catch((error)=>{
      console.log(error);
    })
  }
  

  export const Data = [
    {
       
        court: 'Kerala high court',
        state: 'Kerala',
       
       
    },
    {
       
        court: 'Tamilnadu high court',
        state: 'Tamilnadu ',
        
       
    },
    {
       
        court: 'Delhi high court',
        state: 'Delhi',
       
       
    },
    {
       
        court: 'Bombay high court',
        state: 'Bombay',
        
       
    },
    { 
        
        court: 'Orisa high court',
        state: 'Orisa',
       
       
    },
    {
       
        court: 'Up high court',
        state: 'Uthar pradesh',
       
    }
       
    ,
    {
        
        court: 'Hydrabadh high court', 
        state: 'Hydrabath',
        
       
    },
    {
        
      court: 'kollam high court',
      state: 'Hydrabath',
      
     
  },
]