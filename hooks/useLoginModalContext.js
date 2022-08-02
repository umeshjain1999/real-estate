import { useContext } from "react";
import { LoginModalContext } from "context/LoginModalContext";

export const useLoginModalContext = () => {
  const context = useContext(LoginModalContext)

  if(!context) {
    console.error("useLoginModalContext must be used inside an LoginModalContextProvider");
  }

  return context
}
