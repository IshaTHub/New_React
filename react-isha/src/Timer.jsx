import { useState, useEffect } from "react";

const Timer = () => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		setInterval(() => {
            console.log("i am running");  //memory leak, we haven't cleared the interval
			setCounter((prevCounter) => prevCounter + 1);
		}, 1000);
	}, []);

	return (
		<>
			<span>Current time is : {counter}</span>
			<br />
			{/* <button onClick = {startTimer}>Start Time</button> */}
		</>
	);
};

export default Timer;
