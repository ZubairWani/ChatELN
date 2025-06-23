// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true); // To handle initial auth check
//   const navigate = useNavigate();

//   // On initial load, check if a user token exists in localStorage
//   useEffect(() => {
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       // In a real app, you'd verify the token with your backend here.
//       // For this example, we'll just simulate a logged-in user.
//       setUser({ name: 'Demo User', email: 'user@example.com', role: 'user' });
//     }
//     setIsLoading(false);
//   }, []);

//   // Login function
//   const login = async (email, password) => {
//     // --- MOCK API CALL ---
//     // In a real app, you'd send credentials to your backend API:
//     // const response = await fetch('/api/login', { method: 'POST', body: ... });
//     // const data = await response.json();
//     // if (response.ok) { ... }
    
//     console.log("Attempting login for:", email);
//     const mockToken = `fake-token-for-${email}`;
//     const mockUser = { name: 'Demo User', email: email, role: 'user' };
    
//     localStorage.setItem('authToken', mockToken);
//     setUser(mockUser);
//     navigate('/dashboard');
//   };

//   // Logout function
//   const logout = () => {
//     localStorage.removeItem('authToken');
//     setUser(null);
//     navigate('/login');
//   };

//   const value = {
//     user,
//     isLoading,
//     login,
//     logout,
//   };

//   return <AuthContext.Provider value={value}>{!isLoading && children}</AuthContext.Provider>;
// };

// // Custom hook to easily use the auth context
// export const useAuth = () => {
//   return useContext(AuthContext);
// };










import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // To handle initial auth check
  const navigate = useNavigate();

  // On initial load, check if a user token exists in localStorage
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      // In a real app, you'd verify the token with your backend here.
      // For this example, we'll just simulate a logged-in user.
      setUser({ name: 'Demo User', email: 'user@example.com', role: 'user' });
    }
    setIsLoading(false);
  }, []);

  // Login function
  const login = async (email, password) => {
    // --- MOCK API CALL ---
    // In a real app, you'd send credentials to your backend API:
    // const response = await fetch('/api/login', { method: 'POST', body: ... });
    // const data = await response.json();
    // if (response.ok) { ... }
    
    console.log("Attempting login for:", email);

    // ADDED: 2-second delay to simulate an API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockToken = `fake-token-for-${email}`;
    const mockUser = { name: 'Demo User', email: email, role: 'user' };
    
    localStorage.setItem('authToken', mockToken);
    setUser(mockUser);
    navigate('/dashboard');
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
    navigate('/login');
  };

  const value = {
    user,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{!isLoading && children}</AuthContext.Provider>;
};

// Custom hook to easily use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};










// // src/contexts/AuthContext.js

// import React, { createContext, useContext, useState, useEffect } from 'react';
// // REMOVED: No longer need useNavigate here
// // import { useNavigate } from 'react-router-dom'; 

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   // REMOVED: const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       setUser({ name: 'Demo User', email: 'user@example.com', role: 'user' });
//     }
//     setIsLoading(false);
//   }, []);

//   const login = async (email, password) => {
//     console.log("Attempting login for:", email);

//     // This is our 2-second delay and mock API call
//     await new Promise(resolve => setTimeout(resolve, 2000));
    
//     // In a real app, if the login failed, you would throw an error here.
//     // For example: throw new Error("Invalid credentials");

//     const mockToken = `fake-token-for-${email}`;
//     const mockUser = { name: 'Demo User', email: email, role: 'user' };
    
//     localStorage.setItem('authToken', mockToken);
//     setUser(mockUser);
//     // REMOVED: navigate('/dashboard');
//     // The component that calls login will now handle navigation.
//   };

//   const logout = () => {
//     localStorage.removeItem('authToken');
//     setUser(null);
//     // REMOVED: navigate('/login');
//     // The component that calls logout will now handle navigation.
//   };

//   const value = {
//     user,
//     isLoading,
//     login,
//     logout,
//   };

//   return <AuthContext.Provider value={value}>{!isLoading && children}</AuthContext.Provider>;
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };