import React from 'react'
import './MainNav.css'
function MainNav() {
  return (
  <>
    <nav class="navbar navbar-expand-lg navbar-dark ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Eventron</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Participate</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            For Organizers
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/orgc">Business Login</a></li>
            
            <li><a class="dropdown-item" href="/eveform">Host Event</a></li>
            
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/evedit">Pricing</a>
        </li>
      
      </ul>
    <ul class="navbar-nav ms-auto ">
    <li><button className="btn btn-primary">Host</button></li>
    </ul>
    </div>
  </div>
</nav>  
  </>
  )
}

export default MainNav