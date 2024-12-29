import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CaptainRiding = (props) => {

  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  useGSAP(function () {
    if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
            transform: 'translateY(20%)'
        })
    } else {
        gsap.to(finishRidePanelRef.current, {
            transform: 'translateY(100%)'
        })
    }
}, [ finishRidePanel ])
  return (
    <div className="h-screen relative">
        <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
              
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <div className='fixed p-6 top-0 items-center justify-between w-screen'>
          <img className='w-16 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
          <Link to='/captain-home' className='h-10 w-10 bg-white items-center justify-center rounded-full'>
          <i class="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
        </div>
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="background"

        />
      </div>
      <div className="h-1/5 p-6 flex items-center object-cover justify-between bg-yellow-400" onClick={()=>{
        setFinishRidePanel(true)
      }}>
      <h5 className='p-1 text-center w-[95%] absolute bottom-20 '>
        <i className=' text-3xl text-black ri-arrow-up-wide-fill'></i>
        </h5>
        <h4 className='text-xl font-semibold'>4 km away</h4>
        <button onClick={()=>{
               
                
                }} className=' bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete ride</button>
      </div>
      <div ref={finishRidePanelRef} className="fixed w-full h-full z-10 bottom-0 translate-y-full bg-white px-1 py-10 pt-14">
       <FinishRide setFinishRidePanel={setFinishRidePanel}/>
      </div>
    </div>
  )
}

export default CaptainRiding
