import EditAssociation from "../../components/netmagicsdashboard/association-component/EditAssociation";
import axiosInstance from '../../configs/axios/AxiosVonfiguration'



// const handleButtonClick = (row) => {
//   axios.patch(`association/suspend-association/${row.id}`, {
//     id: row.id,
//     status: row.status ? 'Suspended' : 'Active' 
//   })
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error('There was an error!', error);
//   });
// }


const handleSuspend=async(userid,is_suspend)=>{
    
  try {
    if(is_suspend){
      await axiosInstance.patch(`association/suspend-association/${userid}`).then((response)=>{
            console.log(response.data);
          }).catch((error)=>{
            console.log(error);
          })
    }else{
      await axiosInstance.patch(`association/suspend-association/${userid}`).then((response)=>{
        console.log(response.data);
      }).catch((error)=>{
        console.log(error);
      })
    }
    
  } catch (error) {
     console.log(error);
  }
  }



export const Columns = [
    {
      name: 'Association Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      sortable: true,
    },
    {
        name: 'Court',
        selector: (row) => row.court,
        sortable: true,
      },
    // {
    //   name: 'Edit',
    //   selector: (row) => (
    //     // <button className="bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
    //     //   Edit
    //     // </button>
    //     <EditAssociation/>
    //   ),
    //   sortable: false, 
    // },


    // {
    //   name: 'Suspend',
    //   selector: (row) => (
    //     <button className="bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
    //       Delete
    //     </button>
    //   ),
    //   sortable: false,
    // },

    {
      name: 'Suspend',
      selector: (row) => (
        <button onClick={()=>handleSuspend(row.id,row.is_suspend)} className={`bg-${row.is_suspend ? 'red' :'green'}-500  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded`}>
          {row.is_suspend ? 'suspend' : 'unsuspend'}
        </button>
      ),
      sortable: false,
    },
    


  ];
  






export const Data = [
    {
        id: 1,
        name: 'appu',
        email: 'arun@gmail.com',
        court: 'Kerala high court',
       
       
    },
    {
        id: 2,
        name: 'namitha',
        email: 'namitha@gmail.com',
        court: 'Tamilnadu high court',
        
       
    },
    {
        id: 3,
        name: 'siju',
        email: 'siju@gmail.com',
        court: 'Andhra high court',
       
       
    },
    {
        id: 4,
        name: 'rithin',
        email: 'rithin@gmail.com',
        court: 'Odisha high court',
       
       
    },
    {
        id: 5,
        name: 'akhil',
        email: 'akhil@gmail.com',
        court: 'Delhi high court',
       
       
    },
    {
        id: 6,
        name: 'vaisakh',
        email: 'vaisakh@gmail.com',
        court: 'Karnataka high court',
       
    }
       
    ,
    {
        id: 7,
        name: 'varun',
        email: 'varun@gmail.com',
        court: 'Mumbai high court',
       
       
    },
    {
        id: 7,
        name: 'kishan',
        email: 'kishan@gmail.com',
        court: 'gujarath high court',
       
       
    },
    {
        id: 7,
        name: 'amal',
        email: 'amal@gmail.com',
        court: 'gujarath high court',
      
       
    },
    {
        id: 7,
        name: 'amal',
        email: 'amal@gmail.com',
        court: 'gujarath high court',
      
       
    },
    {
        id: 7,
        name: 'amal',
        email: 'amal@gmail.com',
        court: 'gujarath high court',
      
       
    }
];
