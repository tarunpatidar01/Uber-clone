import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start.jsx";
import Home from "./pages/Home.jsx";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainSignup from "./pages/CaptainSignup";
import CaptainLogin from "./pages/CaptainLogin";
import UserLogout from "./pages/UserLogout.jsx";
import { UserDataProvider } from "./context/userContext.jsx";
import UserProtectWrapper from "./pages/UserProtectWrapper.jsx";
import CaptainHome from "./pages/CaptainHome.jsx";
import CaptainProtectWrapper from "./pages/CaptainProtectWrapper.jsx";
import CaptainLogout from "./pages/CaptainLogout.jsx";
import Riding from "./pages/Riding.jsx";
import CaptainRiding from "./pages/CaptainRiding.jsx";
import "remixicon/fonts/remixicon.css";


function App() {
  return (
    <div>
      <UserDataProvider>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/riding" element={<Riding/>} />
          <Route path="/captain-riding" element={<CaptainRiding/>} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/captain-signup" element={<CaptainSignup />} />
          <Route path="/captain-login" element={<CaptainLogin />} />
          <Route
            path="/home"
            element={
              <UserProtectWrapper>
                <Home />
              </UserProtectWrapper>
            }
          />
          <Route
            path="/user/logout"
            element={
              <UserProtectWrapper>
                <UserLogout />
              </UserProtectWrapper>
            }
          />
          <Route path="/captain-home" element={
            <CaptainProtectWrapper>
            <CaptainHome/>
          </CaptainProtectWrapper>
          }/>
          <Route path="/captain/logout" element={
            <CaptainProtectWrapper>
              <CaptainLogout/>
            </CaptainProtectWrapper>
          }/>
        </Routes>
      </UserDataProvider>
      
    </div>
  );
}

export default App;
