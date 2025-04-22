import { useState, useEffect } from "react";

const Timer = () => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setCounter((prevCounter) => prevCounter + 1);
		}, 1000);
	}, []);

	return (
		<>
			<span>Current time is : </span>
			<br />
			{/* <button onClick = {startTimer}>Start Time</button> */}
		</>
	);
};

export default Timer;
