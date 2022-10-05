import React from 'react'
import BottomNav from '../BottomNav'
import './Organizer.css'
function Organizers() {
  return (
 <>


<div className="container">
    <form action="">
    <label htmlFor="exampleInputEmail1" class="htmlForm-label">What kind of event are you hosting?</label>
    <br />
    <div className="container">
    <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off"  />
<label class="btn btn-outline-primary" htmlFor="option1">Cultural Events</label>

<input type="radio" class="btn-check" name="options" id="option2" autocomplete="off"/>
<label class="btn btn-outline-primary" htmlFor="option2">Technical Events</label>

<input type="radio" class="btn-check" name="options" id="option3" autocomplete="off"/>
<label class="btn btn-outline-primary" htmlFor="option3">Volunteering Events</label>



<input type="radio" class="btn-check" name="options" id="option4" autocomplete="off"/>
<label class="btn btn-outline-primary" htmlFor="option4">Sports</label>

<input type="radio" class="btn-check" name="options" id="option5" autocomplete="off"/>
<label class="btn btn-outline-primary " htmlFor="option5">Music Festival</label>

<input type="radio" class="btn-check" name="options" id="option6" autocomplete="off"/>
<label class="btn btn-outline-primary" htmlFor="option6">Arts Festival</label>
    </div>
   <div className="container">
   
   <div class="mb-3">
   <label htmlFor="exampleInputEmail1" class="htmlForm-label">Enter your Event Name</label>
  <textarea maxlength="255" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
   </div>
   <div className="mb-3">
    <div className="row">
        <div className="col">
        <label for="startDate">Start Date of the Event</label> <br/>
        <input id="startDate" class="form-control" type="date" />
     
        </div>
        <div className="col">
        <label for="startDate">End Date of the Event</label>
    <input id="startDate" class="form-control" type="date" />
        </div>
    </div>
  
    

        
        
   </div>
   <div className="mb-3">

          <label for="formGroupExampleInput2">Enter your Organisation</label> 
          <input type="text" class="form-control" id="formGroupExampleInput2"/>

          </div>
      <div className="mb-3">
      <label for="formGroupExampleInput2">Enter your Domain</label> 
      <select name="" class="form-select" aria-label="Default select example" id="">
        <option value="">Engineering</option>
        <option value="">Entrepreneurship</option>
        <option value="">Arts</option>
        <option value="">Others</option>
      </select>
      </div>
<div className="mb-3">
    <label htmlFor="">Enter Registration  Amount</label>
    <input type="number"  class="form-control"/>
</div>
<div class="mb-3">
  <label for="formFileSm" class="form-label">Small file input example</label>
  <input class="form-control form-control-sm" id="formFileSm" type="file" />
</div>
   <input  class="form-control btn btn-primary"type="submit" />
    </form>
</div>

 </>
  )
}

export default Organizers