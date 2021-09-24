import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	// state
	const [isAuthenticated, setAuthenticated] = useState(true);

	const toggleAuth = () => {
		setAuthenticated(!isAuthenticated);
	};

	// context data
	const authContextData = {
		isAuthenticated,
		toggleAuth,
	};

	// return
	return (
		<AuthContext.Provider value={authContextData}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
