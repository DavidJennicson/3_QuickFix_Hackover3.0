
import axios from 'axios';
import {useState,useEffect} from 'react';
import {MDTable,MDBTableHead,MDBTableBody,MDBRow,MDBCol,MDBContainer, MDBTable} from 'mdb-react-ui-kit';
function OrgTable() {
  const [data,setData]= useState([]);
  useEffect(()=>{
    loadUsersData();
  },[]);
  const loadUsersData =async ()=>{
    return await axios.get("http://localhost:5000/verification").then((response)=>setData(response.data)).catch((err)=> console.log(err));

  }

  return (
   <>

<div className=" mx-4">
<div >
   
<MDBRow>
     <MDBCol>
       <MDBTable hover>
         <MDBTableHead dark>
             <tr>
               <th className="col">Name</th>
               <th className="col">Phone</th>
               <th className="col">Email</th>
              <th className="col">Action</th>
             </tr>
         </MDBTableHead>
         {data.length===0 ? (
           <MDBTableBody className='align-center mb-0'>
             <tr>
               <td colSpan={8}>No data</td>
             </tr>
           </MDBTableBody>):(
             data.map((item,index)=>(
               <MDBTableBody key={index}>
                 <tr>
                 
                   <td>{item.name}</td>
                   <td>{item.phone}</td>
                   <td>{item.email}</td>
                  <td><a className='btn btn-primary' href="">View Event</a></td>
                
                 </tr>
               </MDBTableBody>
             ))
           )

         }
       </MDBTable>
     </MDBCol>
   </MDBRow>
 </div>
</div>
   </>
  )
}

export default OrgTable