import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(null);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("authState")) || null;
    setState(data);
  }, []);
  return (
    <AuthContext.Provider value={state}>
      <AuthContextDispatcher.Provider value={setState}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);
