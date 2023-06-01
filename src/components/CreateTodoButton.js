import React from "react";

export function CreateTodoButton(props) {
	const onClickButton = () => {
		props.setOpenModal((prevState) => !prevState);
	};

	return (
		<button
			className="bg-[#61DAFA] shadow-[0px_5px_25px_rgba(97,218,250,0.5)] border-none rounded-full cursor-pointer text-[50px] fixed bottom-14 right-6 font-bold text-[#FAFAFA] flex justify-center items-center h-16 w-16 hover:rotate-[224deg] transition-all z-10"
			onClick={onClickButton}
		>
			+
		</button>
	);
}
