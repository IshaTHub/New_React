import React from "react";
import { useEffect, useState } from "react";
const App = () => {
	const [data1, setData1] = useState(0);
	const [data2, setData2] = useState(0);
	useEffect(() => {
		console.log("Data 1 changed");
	}, [data1]);

	useEffect(() => {
		console.log("data 2 changed");
	}, [data2]);

	return (
		<>
			{data1}
			<br />
			<button onClick={() => setData1((prevData) => prevData + 1)}>
				click me
			</button>
			<br />
			{data2}
			<br />
			<button onClick={() => setData2((prevData) => prevData + 1)}>
				Update
			</button>
		</>
	);
};

export default App;
