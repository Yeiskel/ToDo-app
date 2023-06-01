import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";

export function TodoForm() {
	const [newTodoValue, setNewTodoValue] = React.useState("");
	const { addTodo, setOpenModal } = React.useContext(TodoContext);
	const onChange = (event) => {
		setNewTodoValue(event.target.value);
	};
	const onCancel = () => {
		setOpenModal(false);
	};
	const onSubmit = (event) => {
		event.preventDefault();
		addTodo(newTodoValue);
		setOpenModal(false);
	};

	return (
		<form
			onSubmit={onSubmit}
			className="w-[90%] max-w-[300px] bg-[#fff] px-8 py-10 flex justify-center items-center flex-col rounded-md"
		>
			<label className="text-center font-bold text-xl text-[#1E1E1F] mb-7">
				Escribe tu nuevo TODO
			</label>
			<textarea
				placeholder="Sacar la basura"
				value={newTodoValue}
				onChange={onChange}
				className="bg-[#F9FBFC] border-2 border-solid border-[#202329] text-[#1E1E1F] text-xl text-center p-3 h-24 w-[calc(100%-25px)] placeholder:text-[#A5A5A5] placeholder:font-['Monteserrat'] font-normal focus:outline-[#61DAFA] rounded-md"
			/>
			<div className="mt-3.5 flex justify-between items-center w-full">
				<button
					type="button"
					onClick={onCancel}
					className="cursor-pointer inline-block text-xl text-[#202329] font-normal w-[120px] h-12 rounded-sm border-none font-['Monteserrat'] bg-transparent"
				>
					Cancelar
				</button>
				<button
					type="submit"
					className="cursor-pointer inline-block text-xl text-[#202329] font-normal w-[120px] h-12 rounded-md border-none font-['Monteserrat'] bg-[#61DAFA] shadow-[0px_5px_25px_rgba(97,218,250,0.5)]"
				>
					Añadir
				</button>
			</div>
		</form>
	);
}
