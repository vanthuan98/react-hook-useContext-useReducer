import { GET_TODOS, SAVE_TODOS, DELETE_TODOS, ADD_TODOS } from "./types";

export const todoReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_TODOS:
			console.log("getting todos");
			const todos = JSON.parse(localStorage.getItem("todos")) || [];
			state = todos;
			return state;
		case SAVE_TODOS:
			console.log("saving todos");
			localStorage.setItem("todos", JSON.stringify(payload.todos));
			return state;
		case ADD_TODOS:
			return [...state, payload.todo];
		case DELETE_TODOS:
			return state.filter((todo) => todo.id !== payload.id);
		default:
			return state;
	}
};
