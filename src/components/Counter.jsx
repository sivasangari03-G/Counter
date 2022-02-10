import React, { useEffect, useState } from "react";

export const Counter = ({ start, end }) => {
	const [counter, setCounter] = useState(start);
	useEffect(() => {
		// console.log("useeffect executed");
		const id = setInterval(() => {
			setCounter((value) => {
				if (value < end) {
					return value + 1;
				} else {
					clearInterval(id);
					return value;
				}
			});
		}, 1000);
		return () => clearInterval(id);
	}, [counter]);


	return (
		<>
			<h1>counter: {counter}</h1>
		</>
	);
};
