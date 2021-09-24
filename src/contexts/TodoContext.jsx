import React, { createContext, useEffect, useReducer } from "react";
import { todoReducer } from "../reducers/TodoReducer";
import { GET_TODOS, SAVE_TODOS } from "../reducers/types";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
	const [todos, dispatch] = useReducer(todoReducer, []);

	useEffect(() => {
		dispatch({ type: GET_TODOS });
	}, []);

	useEffect(() => {
		dispatch({
			type: SAVE_TODOS,
			payload: { todos },
		});
	}, [todos]);

	// context data
	const todoContextData = {
		todos,
		dispatch,
	};

	return (
		<TodoContext.Provider value={todoContextData}>
			{children}
		</TodoContext.Provider>
	);
};

export default TodoContextProvider;
