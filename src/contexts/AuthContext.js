import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const storedAuth = localStorage.getItem('adminAuth');
    if (storedAuth) {
      try {
        const authData = JSON.parse(storedAuth);
        setIsAuthenticated(true);
        setUser(authData);
      } catch (error) {
        console.error('Error parsing auth data:', error);
        localStorage.removeItem('adminAuth');
      }
    }
    setLoading(false);
  }, []);

  const login = (username, password) => {
    // Demo credentials - in production, this would be an API call
    // For demo: username = "admin", password = "apredcross2024"
    if (username === 'admin' && password === 'apredcross2024') {
      const userData = {
        username: 'admin',
        role: 'administrator',
        loginTime: new Date().toISOString()
      };
      
      setIsAuthenticated(true);
      setUser(userData);
      localStorage.setItem('adminAuth', JSON.stringify(userData));
      
      return { success: true };
    } else {
      return { success: false, error: 'Invalid username or password' };
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('adminAuth');
  };

  const value = {
    isAuthenticated,
    user,
    loading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
