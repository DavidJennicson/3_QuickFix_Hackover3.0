
import axios from 'axios';
import {useState,useEffect} from 'react';
import {MDTable,MDBTableHead,MDBTableBody,MDBRow,MDBCol,MDBContainer, MDBTable} from 'mdb-react-ui-kit';
function Table() {
  const [data,setData]= useState([]);
  useEffect(()=>{
    loadUsersData();
  },[]);
  const loadUsersData =async ()=>{
    return await axios.get("http://localhost:5000/events").then((response)=>setData(response.data)).catch((err)=> console.log(err));

  }

  return (
   <>
<MDBContainer>
  <div >
   
    <MDBRow>
      <MDBCol>
        <MDBTable hover>
          <MDBTableHead dark>
              <tr>
                <th className="col">Event Name</th>
                <th className="col">Status</th>
                <th className="col">Revenue</th>
                <th className="col">Venue</th>
         
                <th className="col">Category</th>
                <th className='col'>Action</th>
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
                  
                    <td>{item.event}</td>
                    <td>{item.status}</td>
                    <td>{item.revenue}</td>
                    <td>{item.venue}</td>
                    <td>{item.category}</td>
                    <td><button className='btn btn-primary'>o</button></td>
                 
                  </tr>
                </MDBTableBody>
              ))
            )

          }
        </MDBTable>
      </MDBCol>
    </MDBRow>
  </div>
</MDBContainer>
   </>
  )
}

export default Table