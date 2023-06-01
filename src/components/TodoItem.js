import { TbSquareRoundedCheck, TbSquareRounded } from "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";

export function TodoItem(props) {
	return (
		<li className="bg-[#FAFAFA] relative flex justify-center items-center mt-6 shadow-[0px_5px_50px_rgba(32,35,41,0.15)] rounded-md">
			<span
				className={`cursor-pointer flex justify-center items-center h-12 w-12 text-2xl text-bold absolute left-4 hover:text-[#61DAFA] ${
					props.completed && "text-[#4caf50]"
				}`}
				onClick={props.onComplete}
			>
				{props.completed ? (
					<TbSquareRoundedCheck />
				) : (
					<TbSquareRounded />
				)}
			</span>
			<p
				className={`my-6 ml-6 w-[calc(100%_-_120px)] text-[18px] leading-6 font-normal ${
					props.completed && "line-through"
				}`}
			>
				{props.text}
			</p>
			<span
				className="cursor-pointer flex justify-center items-center h-12 w-12 text-2xl text-bold absolute -top-6 right-0 hover:text-red-500"
				onClick={props.onDelete}
			>
				<MdDeleteForever />
			</span>
		</li>
	);
}
