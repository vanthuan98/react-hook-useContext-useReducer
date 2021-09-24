import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";
import { DELETE_TODOS } from "../reducers/types";

const TodoItem = ({ todo }) => {
	const { theme } = useContext(ThemeContext);
	const { isLightTheme, light, dark } = theme;
	const style = isLightTheme ? light : dark;

	const { dispatch } = useContext(TodoContext);

	const handleDeleteTodo = (id) => {
		dispatch({
			type: DELETE_TODOS,
			payload: {
				id: id,
			},
		});
	};

	return (
		<li onClick={() => handleDeleteTodo(todo.id)} style={style}>
			{todo.title}
		</li>
	);
};

export default TodoItem;
