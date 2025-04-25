//import React from "react";
import { useState, useRef } from "react";
//import Timer from "./Timer.jsx";

const App = () => {

	const [count, setCount] = useState(0);
	
	return (


		<>
			outermost parent: {count}
		</>
	);
};

export default App;
