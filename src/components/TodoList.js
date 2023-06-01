import React from "react";

export function TodoList(props) {
	return (
		<section>
			<ul className="pb-14 list-none">{props.children}</ul>
		</section>
	);
}
