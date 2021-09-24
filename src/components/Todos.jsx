import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { TodoContext } from "../contexts/TodoContext";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const Todos = () => {
	// load todo context
	const { todos } = useContext(TodoContext);

	// load auth context
	const { isAuthenticated } = useContext(AuthContext);

	return (
		<div className="todo-list">
			<TodoForm />
			{isAuthenticated ? (
				<ul>
					{todos.map((todo) => (
						<TodoItem key={todo.id} todo={todo}></TodoItem>
					))}
				</ul>
			) : (
				<p style={{ textAlign: "center" }}>Not author</p>
			)}
		</div>
	);
};

export default Todos;
