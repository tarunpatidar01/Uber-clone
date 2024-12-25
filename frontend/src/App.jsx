import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Start from './pages/Start.jsx'
import Home from './pages/Home.jsx'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'
import UserLogout from './pages/UserLogout.jsx'
import { UserDataProvider } from './context/userContext';  // Import the provider
import UserProtectWrapper from './pages/UserProtectWrapper.jsx'

function App() {
  return (
    <div>
          <UserDataProvider>  {/* Wrap your routes with the context provider */}

      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/captain-signup' element={<CaptainSignup/>}/>
        <Route path='/captain-login' element={<CaptainLogin/>}/>
        <Route path='/home' element={
          <UserProtectWrapper>
            <Home/>
          </UserProtectWrapper>
        }/>
        <Route path='/user/logout' element={
          <UserProtectWrapper>
            <UserLogout/>
          </UserProtectWrapper>
        }/>
      </Routes>
      </UserDataProvider>
    </div>
  )
}

export default App
