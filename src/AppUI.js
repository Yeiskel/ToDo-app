import React from "react";
import { TodoContext } from "./TodoContext/TodoContext";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoForm } from "./components/TodoForm";
import { Modal } from "./components/Modal";
import { Loader } from "./components/Loader";

function AppUI() {
	const {
		error,
		loading,
		searchedTodos,
		completeTodo,
		deleteTodo,
		openModal,
		setOpenModal,
	} = React.useContext(TodoContext);
	return (
		<>
			<TodoCounter />
			<TodoSearch />

			<TodoList>
				{error && <p>Hubo un error</p>}
				{loading && <Loader />}
				{!loading && !searchedTodos.length && (
					<p className="pt-6 text-xl animate-bounce font-bold text-[#61DAFA]">
						Vamos a crear tu primer ToDo!
					</p>
				)}
				{searchedTodos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => {
							completeTodo(todo.text);
						}}
						onDelete={() => {
							deleteTodo(todo.text);
						}}
					/>
				))}
			</TodoList>
			{openModal && (
				<Modal>
					<TodoForm />
				</Modal>
			)}
			{!loading && <CreateTodoButton setOpenModal={setOpenModal} />}
		</>
	);
}

export { AppUI };
