import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";

export function TodoSearch() {
	const { searchValue, setSearchValue } = React.useContext(TodoContext);
	const onSearchValueChange = (event) => {
		console.log(event.target.value);
		setSearchValue(event.target.value);
	};

	return (
		<input
			className="bg-[#F9FBFC] rounded-md border-2 border-[#202329] border-solid mx-6 h-16 w-[calc(100%-62px)] text-2xl text-center font-normal text-[#1E1E1F] shadow-[0px_5px_50px_rgba(32,35,41,0.25)] placeholder:text-[#A5A5A5] focus:outline-[#61DAFA] "
			placeholder="Buscar"
			value={searchValue}
			onChange={onSearchValueChange}
		/>
	);
}
