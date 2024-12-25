// src/context/userContext.jsx

import React, { createContext, useState } from 'react';

// Create the context
export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {

    const [ user, setUser ] = useState({
        email: '',
        fullName: {
            firstName: '',
            lastName: ''
        }
    })

    return (
      <UserDataContext.Provider value={{ user, setUser }}>
        {children}
      </UserDataContext.Provider>
    );
  };

