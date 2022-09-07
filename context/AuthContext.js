/* library */
import { createContext, useEffect, useReducer } from "react";
import { setCookie, getCookie, deleteCookie } from 'cookies-next'
/* utils */
import { getMeDomainName } from "@utility/functions";
/* constant */
import { USER_LOCAL_STORAGE_KEY } from "@constants/constant";

export const AuthContext = createContext()

export const authReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			setCookie(USER_LOCAL_STORAGE_KEY, action.payload, {
				path: "/",
				maxAge: 3600, // Expires after 1hr
				sameSite: true,
			})
			return {
				...state,
				user: action.payload,
			}
		case 'LOGOUT':
			deleteCookie(USER_LOCAL_STORAGE_KEY, {
				path: '/',
				domain: getMeDomainName(),
			})
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
		try {
			const user = JSON.parse(getCookie(USER_LOCAL_STORAGE_KEY))
			if (user) {
				dispatch({ type: "LOGIN", payload: { ...user } })
			}
		} catch (error) {
			console.error('Error encountered while fetching user :(')
		}
	}, [])

	const isUserAuthenticated = () => !!state.user

	return (
		<AuthContext.Provider value={{ ...state, dispatch, isUserAuthenticated }}>
			{children}
		</AuthContext.Provider>
	)
}

