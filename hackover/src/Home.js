import React from 'react'
import Lottie from 'react-lottie';
import animationData from './69351-olympic-games-2021-victory-player.json'
import './Home.css'
function Home() {
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
   <div className="container row">
    <div className="col-6"><h1 className='titless'>Competions are the steps to Sucess</h1></div>
    <div className="col-6">
    <Lottie 
	    options={defaultOptions}
        height={600}
        width={600}/>
    </div>
   </div>
   </>
  )
}

export default Home