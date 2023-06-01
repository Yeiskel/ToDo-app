import ReactDOM from "react-dom";

export function Modal({ children }) {
	return ReactDOM.createPortal(
		<div className="bg-[rgba(32,35,41,.8)] fixed -top-[10px] -left-[10px] -right-[10px] -bottom-[10px] flex items-center justify-center ">
			{children}
		</div>,
		document.getElementById("modal")
	);
}
