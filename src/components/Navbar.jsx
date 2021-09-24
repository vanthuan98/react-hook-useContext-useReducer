import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
	// load theme context
	const { theme } = useContext(ThemeContext);
	const { isLightTheme, light, dark } = theme;
	const style = isLightTheme ? light : dark;

	// load auth context
	const { isAuthenticated, toggleAuth } = useContext(AuthContext);

	return (
		<div className="navbar" style={style}>
			<h1>React Hook</h1>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>
					{isAuthenticated ? "You are logged in " : ""}
					<button onClick={toggleAuth}>Login</button>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
