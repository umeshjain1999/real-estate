import { createContext, useReducer } from "react";

export const AuthContext = createContext()

export const authReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				user: action.payload
			}
		case 'LOGOUT':
			return {
				...state,
				user: null
			}
		default:
			return state
	}
}

export const AuthContextProvider = ({children}) => {

  const [state, dispatch] = useReducer(authReducer, {
		user: {
			name : "Umesh Jain",
			mobile : "7045511182",
			email : "umesh@gmail.com",
			dob : "-723706200000", //!timestamp format
			city : "Andheri",
			pincode : "400051"
		},
	})


  return (
    <AuthContext.Provider value={{...state,dispatch}}>
      {children}
    </AuthContext.Provider>
  )
}

