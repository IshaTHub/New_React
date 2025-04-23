import { useState, useEffect } from "react";

const Timer = (props) => {
	const [counter, setCounter] = useState(0);
const {customText} = props;
	useEffect(() => {
		const interval  = setInterval(() => {
            console.log("i am running");  //memory leak, we haven't cleared the interval
			setCounter((prevCounter) => prevCounter + 1);
			
		}, 1000);
		return () => {
			console.log("unmounted with id ", interval)
			clearInterval(interval); //cleanup function
			//console.log("cleanup function called"); //this will be called when the component is unmounted
		}
	}, []);

	useEffect(() => {

		return () =>{
			console.log("custom cleaning for second effect");
		}
	}, [customText])

	return (
		<>
			<span>Current time is : {counter}</span>
			<br />
			{/* <button onClick = {startTimer}>Start Time</button> */}
			<span>{customText}</span>
			<br />
		</>
	);
};

export default Timer;
