import { useContext } from "react";
import { AuthContext } from "context/AuthContext";

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if(!context) {
    console.error("useAuthContext must be used inside an AuthContextProvider");
  }

  return context
}
