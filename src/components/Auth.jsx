// auth.js
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(() => {
    const token = localStorage.getItem("x-access-token");
    return token ? true : false;
  });
  const login = (token) => {
    localStorage.setItem("x-access-token", JSON.stringify(token));
  
    setLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("x-access-token");
    localStorage.removeItem("username");
    localStorage.removeItem("email");

    setLoggedIn(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
