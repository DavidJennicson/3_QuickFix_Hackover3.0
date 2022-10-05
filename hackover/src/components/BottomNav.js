import React from 'react'

function BottomNav() {
  return (
  <>
  <nav className="navbar navbar-expand-lg fixed-bottom navbar-dark bg-dark">
  <div className="container-fluid">
   

      <ul className="navbar-nav me-auto p-4">
        <li className="nav-item">
<button className="btn-primary btn">Previous</button>
        </li>
       
    
       
      </ul>
      <ul className="navbar-nav ms-auto mr-2 ">
        <li className="nav-item">
<button className="btn-success btn  mx-4">Save and Next</button>
        </li>
       
    
       
      </ul>
    </div>
 
</nav>
  </>
  )
}

export default BottomNav