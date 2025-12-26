import { createContext, useContext, useState, useEffect } from "react";
import Loading from "../componets/Shared/Loading";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock checking auth state
  useEffect(() => {
    // Check local storage or verify token here
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    
    // Artificial delay to show the loader (remove in production)
    setTimeout(() => {
        setLoading(false);
    }, 2000);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const authInfo = {
    user,
    loading,
    login,
    logout,
  };

  if (loading) {
      return <Loading />;
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
