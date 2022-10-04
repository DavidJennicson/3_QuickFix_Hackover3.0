import React from 'react'
import './Table.css'
function Table() {
  return (
    <>
    <div className="container contab table-responsive">
    <table class="table table-hover">
  <thead>
    <tr>
   
      <th scope="col">Event</th>
      <th scope="col">Status</th>
      <th scope="col">Verification</th>
        <th scope="col">Progress</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>Mark</td>
      <td><h5><span class="badge bg-secondary">New</span></h5></td>
      <td>@mdo</td>
      <td></td>
    </tr>
    <tr>
     
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
   
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>
    </>
  )
}

export default Table