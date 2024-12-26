import React from 'react'

function LocationSearchPanel(props) {

    // simple array for location
    const locations = [
        "24B, Near Kapoor's cafe, SHeriyans Coding School, Bhopal",
        "24c, Near Malhotra's cafe, SHeriyans Coding School, Bhopal",
        "24D, Near Ambani cafe, SHeriyans Coding School, Bhopal",
        "24E, Near Patidar's cafe, SHeriyans Coding School, Bhopal"
    ]
  return (
    <div className='mt-5'> 
    {
        locations.map(function(elem,idx){
           return <div key={idx} onClick={()=>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false);
           }} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl  items-center my-2 justify-start'>
             <h2 className='bg-[#eee] h-7 w-12 flex items-center justify-center rounded-full '><i className="ri-map-pin-fill"></i></h2>
               <h4 className='font-medium'>{elem}</h4>
            </div>
        })
    }
    
       
       
    </div>
  )
}

export default LocationSearchPanel
