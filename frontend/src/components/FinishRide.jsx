import React from "react";
import { Link } from "react-router-dom";
const FinishRide = (props) => {
  return (
   
      <div >
        <h5
          className="p-1 text-center w-[93%] absolute top-0"
          onClick={() => {
            props.setFinishRidePanel(false);
          }}
        >
          <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-5">
          Finish This Ride
        </h3>
        <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-xl mt-4 ">
          <div className="flex items-center gap-3">
            <img
              className="h-12 w-12 rounded-full object-cover"
              src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
              alt=""
            />
            <h2 className="text-lg font-medium">Tarun Patidar</h2>
          </div>
          <h5 className="text-lg font-semibold">2.2 km</h5>
        </div>
        <div className="flex gap-2 justify-between flex-col items-center">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="ri-map-pin-user-fill"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm -mt-1 text-gray-600">pickup</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm -mt-1 text-gray-600">destination</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3">
              <i className="ri-currency-line"></i>
              <div>
                <h3 className="text-lg font-medium">₹55</h3>
                <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
              </div>
            </div>
          </div>
          <div className="mt-6 w-full">
            
              <Link
                to="/captain-home"
                className="w-full mt-5 flex text-center justify-center bg-green-600 text-white font-semibold p-2 rounded-lg"
              >
                Finish Ride
              </Link>
             {/* <p className="mt-6 text-xs ">click on finish ride button if you completed the payment.</p> */}
          </div>
        </div>
      </div>
  
  );
};

export default FinishRide;