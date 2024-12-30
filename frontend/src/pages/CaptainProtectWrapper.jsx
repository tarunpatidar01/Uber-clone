import React, { useContext, useEffect, useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainProtectWrapper = ({ children }) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!token) {
            navigate('/captain-login')
            return
        }
        axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
                // console.log('Captain profile:', response.data)
                setCaptain(response.data);
            } else {
                console.error('Unexpected response status:', response.status)
            }
        }).catch(error => {
            console.error('Error fetching captain profile:', error)
            navigate('/captain-login')
        }).finally(() => {
            setIsLoading(false)
        })
    }, [token, navigate, setCaptain])

    if (isLoading) {
        return <div>Loading...</div>
    }
    // console.log('Captain:', captain.fullname.firstname);

    return <>{children}</>
}

export default CaptainProtectWrapper;
