//import React from "react";
import { useState, useRef } from "react";
import Timer from "./Timer.jsx";

const App = () => {
	let myLocalVariable = 0;
	const ref = useRef(0);
	const [myCount, setMyCount] = useState(0);
	console.log(ref.current)

	return (
		<>
			<button
				type="button"
				onClick={() => {
					myLocalVariable += 1;
				}}
			>
				Change local variable
				</button>
			<button
				type="button"
				onClick={() => {
					ref.current += 1;
				}}
			>
				Change ref
			</button>
			<button
				type="button"
				onClick={() => {
					setMyCount((prevCount) => prevCount + 1);
				}}
			>
				Change state
			</button>
			<div>
				<br />
				<span>local var: {myLocalVariable}</span>
				<br />
				<span>ref: {ref.current}</span>
				  <br />
				<span>state: {myCount}</span>
				<br />
			</div>

			<h4>Timer Example</h4>
			<Timer />
			
		</>
	);
};

export default App;
