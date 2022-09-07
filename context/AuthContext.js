/* library */
import { createContext, useEffect, useReducer } from "react";
/* utils */
import { removeItemFromLocalStorage, setItemToLocalStorage, getItemFromLocalStorage } from "@utility/functions";
/* constant */
import { USER_LOCAL_STORAGE_KEY, TOKEN_LOCAL_STORAGE_KEY } from "@constants/constant";

export const AuthContext = createContext()

export const authReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			setItemToLocalStorage(USER_LOCAL_STORAGE_KEY, action.payload)
			setItemToLocalStorage(TOKEN_LOCAL_STORAGE_KEY, action.payload?.token || '')
			return {
				...state,
				user: action.payload,
			}
		case 'LOGOUT':
			removeItemFromLocalStorage(USER_LOCAL_STORAGE_KEY)
			removeItemFromLocalStorage(TOKEN_LOCAL_STORAGE_KEY)
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
		// user: {
		// 	first_name: "Umesh Jain",
		// 	phone: "7045511182",
		// 	email: "umesh@gmail.com",
		// 	dob: -723706200000, //!timestamp format
		// 	city: "Andheri",
		// 	pincode: "400051",
		// 	metadata: "cart_01GBAXQS012CWG870BVC1DKJ2Y",
		// 	token: "erefsdasdwfr",
		// },
		user: null,
	})

	useEffect(() => {
		const user = getItemFromLocalStorage(USER_LOCAL_STORAGE_KEY)
		const token = getItemFromLocalStorage(TOKEN_LOCAL_STORAGE_KEY)
		if (user && token) {
			dispatch({ type: "LOGIN", payload: { ...user, token: token } })
		}
	}, [])

	const isUserAuthenticated = () => !!state.user

	return (
		<AuthContext.Provider value={{ ...state, dispatch, isUserAuthenticated }}>
			{children}
		</AuthContext.Provider>
	)
}

