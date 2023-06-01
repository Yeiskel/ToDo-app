import PacmanLoader from "react-spinners/PacmanLoader";

export function Loader() {
	return (
		<div className="flex justify-center h-[60vh] mt-4 items-center">
			<PacmanLoader color="#61DAFA" size={"80"} />
		</div>
	);
}
