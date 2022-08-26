/* library */
import { createContext, useReducer } from "react";
/* utils */
import { removeItemFromLocalStorage, setItemToLocalStorage } from "@utility/functions";
/* constant */
import { USER_LOCAL_STORAGE_KEY } from "@constants/constant";

export const AuthContext = createContext()

export const authReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			setItemToLocalStorage(USER_LOCAL_STORAGE_KEY, action.payload)
			return {
				...state,
				user: action.payload,
			}
		case 'LOGOUT':
			removeItemFromLocalStorage(USER_LOCAL_STORAGE_KEY)
			return {
				...state,
				user: null
			}
		default:
			return state
	}
}

export const AuthContextProvider = ({ children }) => {

	const [state, dispatch] = useReducer(authReducer, {
		user: {
			name: "Umesh Jain",
			mobile: "7045511182",
			email: "umesh@gmail.com",
			dob: -723706200000, //!timestamp format
			city: "Andheri",
			pincode: "400051"
		},
		cartId: "cart_01GBAXQS012CWG870BVC1DKJ2Y",
		// user: null
	})

	const isUserAuthenticated = () => !!state.user

	return (
		<AuthContext.Provider value={{ ...state, dispatch, isUserAuthenticated }}>
			{children}
		</AuthContext.Provider>
	)
}

