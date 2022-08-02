import { createContext, useState } from "react";

export const LoginModalContext = createContext()

export const LoginModalContextProvider = ({children}) => {

  const [loginModal, setLoginModal] = useState(false)

  const toggleLoginModal = () => {
    setLoginModal(!loginModal)
  }

  return (
    <LoginModalContext.Provider value={{loginModal,toggleLoginModal}}>
      {children}
    </LoginModalContext.Provider>
  )
}

