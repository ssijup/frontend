import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React,{useState} from 'react'
import axiosInstance from '../../../configs/axios/AxiosVonfiguration';
function MyVerticallyCenteredModal(props) {

const [name,setName]=useState("");
const [type,setType]=useState("")
const [estd_date,setEstd_date]=useState("")
const [address,setAddress]=useState("")
const [contact_no,setContact_no]=useState("")
const [description,setDescription]=useState("")



const handleSubmit= async (e)=>{
  e.preventDefault()
  let formField =new FormData()
  formField.append('name',name)
  formField.append('type',type)
  formField.append('estd_date',estd_date)
  formField.append('address',address)
  formField.append('contact_no',contact_no)
  formField.append('description',description)
 console.log("name",name);
console.log("type",type);
console.log("estd_date",estd_date);
console.log("address",address);
console.log("contact_no",contact_no);
console.log("description",description);

  await axiosInstance.post('/association/court/create-court',formField).then((response)=>{
    console.log(response.data);
  }).catch((error)=>{
    console.log(error);
  })


}

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Court
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form id='addcourt'  onSubmit={handleSubmit}>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Court Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name='name' onChange={(e)=>setName(e.target.value)} placeholder="enter court name"/>
      {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Court type
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="court type" name='type' onChange={(e)=>setType(e.target.value)}/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        address
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" name='address' placeholder="enter address" onChange={(e)=>setAddress(e.target.value)}/>
      {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        Date
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="date" name='estd_date'  onChange={(e)=>setEstd_date(e.target.value)} placeholder="date"/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        contact number
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" name='contact_no' onChange={(e)=>setContact_no(e.target.value)} placeholder="contact number"/>
    </div>
    {/* <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        contact number
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div> */}
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        description
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" name='description' type="text"  onChange={(e)=>setDescription(e.target.value)} placeholder="description"/>
      {/* <textarea className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip' textarea/> */}
    </div>
  </div>
</form>   
      </Modal.Body>
      <Modal.Footer>
        <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={props.onHide}>Close</Button>
        <button form='addcourt' type='submit' className=' bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={props.onHide}>Done </button>
      </Modal.Footer>
    </Modal>
  );
}

function AddCourt() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className='hadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded border-none' onClick={() => setModalShow(true)}>
        Add Court <span>+</span>
      </Button>
      
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default AddCourt