import React from 'react'

function Card() {
  return (
    <>
    <main className='mt-5 pt-3'>
<div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <h4>Dashboard</h4>
          </div>
        </div>
        <div class="row">
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Revenue</h5>
        <h3 className="card-text">550</h3>
       
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Events</h5>
        <h3 className="card-text">5450</h3>
        
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Verification Pending</h5>
        <h3 className="card-text">545</h3>
       
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Participants</h5>
        <h3 className="card-text">54500</h3>
       
      </div>
    </div>
  </div>
</div>
        </div>
</main>
    </>
  )
}

export default Card