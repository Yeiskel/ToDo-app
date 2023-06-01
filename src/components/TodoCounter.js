import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
export function TodoCounter() {
	const { totalTodos, completedTodos } = React.useContext(TodoContext);
	return (
		<h2 className="text-2xl text-center p-12 text-[#61DAFA] font-semibold">
			Has completado {completedTodos} de {totalTodos} TODOs
		</h2>
	);
}
