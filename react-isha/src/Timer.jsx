import { useState, useEffect, useRef } from "react";

const Timer = (props) => {
	const [counter, setCounter] = useState(0);
const {customText} = props;

const inputRef = useRef(null); 

const interval = useRef(null); 
	useEffect(() => {
		interval.current = setInterval(() => {
            console.log("i am running");  //memory leak, we haven't cleared the interval
			setCounter((prevCounter) => prevCounter + 1);
			
		}, 1000);
		return () => {
			
			clearInterval(interval.current); //cleanup function
			//console.log("cleanup function called"); //this will be called when the component is unmounted
		}
	}, []);

	const stopTimer = () => {
		clearInterval(interval.current); //this will stop the timer
	};

	return (
		<>
			<span>Current time is : {counter}</span>
			<br />
			{/* <button onClick = {startTimer}>Start Time</button> */}
			<span>{customText}</span>
			<br />
			<button type="button" onClick={stopTimer}>Stop Timer</button>

			<h3>Dom Example</h3>
			<input ref={inputRef} type="text" />
			<button type="button" onClick={() => {
				console.log(inputRef.current.getBoundingClientRect()); //this will log the input field
				if(inputRef.current) inputRef.current.focus(); //this will focus the input field
			}}>Focus the input box</button>
		</>
	);
};

export default Timer;
  