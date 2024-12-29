import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';



const CaptainHome = () => {

  const [ridePopUpPanel, setRidePopUpPanel] = useState(true)
  const ridePanelUpPanelRef = useRef(null)
  const [confirmRidePopPanel,setConfirmRidePopUpPanel] = useState(false);
  const confirmRidePopPanelRef = useGSAP(null)
  


  useGSAP(function () {
    if (ridePopUpPanel) {
        gsap.to(ridePanelUpPanelRef.current, {
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(ridePanelUpPanelRef.current, {
            transform: 'translateY(100%)'
        })
    }
}, [ ridePopUpPanel ])


useGSAP(function () {
  if (confirmRidePopPanel) {
      gsap.to(confirmRidePopPanelRef.current, {
          transform: 'translateY(7%)'
      })
  } else {
      gsap.to(confirmRidePopPanelRef.current, {
          transform: 'translateY(100%)'
      })
  }
}, [ confirmRidePopPanel ])
  return (
    <div className="h-screen">
        <div className='fixed p-3 top-0 items-center justify-between w-screen'>
          <img className='w-16 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
          <Link to='/home' className='h-10 w-10 bg-white items-center justify-center rounded-full'>
          <i class="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
        </div>
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="background"
        />
      </div>
      <div className="h-2/5 p-6">
     <CaptainDetails/>
      </div>
      <div ref={ridePanelUpPanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-1 py-10 pt-14">
       <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
      </div>
      <div ref={confirmRidePopPanelRef} className="fixed w-full h-full z-10 bottom-0 translate-y-full bg-white px-1 py-10 pt-14">
       <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel}/>
      </div>
    </div>
   
  )
}

export default CaptainHome
