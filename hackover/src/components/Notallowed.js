import React from 'react'
import Lottie from 'react-lottie';
import animationData from './lotties/108538-error-emoji-prohibited-not-allowed.json'
function Notallowed() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
  return (
  <>
  <div className="container-fluid">
   <center>
   <h1>Sorry Organizer, Your account is not verified yet!</h1>
   </center>
  <Lottie 
	    options={defaultOptions}
        height={600}
        width={600}
      />
  </div>
  </>
  )
}

export default Notallowed