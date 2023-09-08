import React,{useEffect,useState} from 'react';
import '../../styles/netmagics/registrar.scss';
import DataTable from 'react-data-table-component';
import axiosInstance from '../../configs/axios/AxiosVonfiguration';
import { Columns} from '../../constants/netmagics/AdvocateData';

function Advocates() {
  const [data, setData] = useState([]);

  useEffect(() => {
    
    axiosInstance.get('/advocates/list')
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // const handleEditClick = (id) => {
  //   // Handle the edit button click here
  //   // You can send the ID to the backend for editing
  //   axiosInstance.put(`/advocates/edit/${id}`)
  //     .then(response => {
  //       // Handle the successful edit response (if needed)
  //     })
  //     .catch(error => {
  //       console.error('Error editing data:', error);
  //     });
  // };

  // const columnsWithEditButton = [
  //   ...Columns,
  //   {
  //     name: 'Edit',
  //     cell: (row) => (
         
  //       <button className='hadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded border-none' onClick={() => handleEditClick(console.log(row.id))}>Edit</button>
  //     ),
  //   },
  // ];

  return (
    <>
      <div className='registrar__container'>
        {/* Your title and search input */}
      </div>
      <div className="list-court" style={{ marginTop: '50px' }}>
        <DataTable
          columns={Columns}
          data={data} 
          fixedHeader
          pagination
        />
      </div>
    </>
  );
}

export default Advocates;
