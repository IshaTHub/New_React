//import React from "react";
import { useState } from "react";
//import Timer from "./Timer.jsx";
import SecondParent from "./SecondParent.jsx";

const App = () => {

	const [count, setCount] = useState(0);
	
	return (
		<>
			outermost parent: {count} &nbsp;
			<button type="button" onClick={() => setCount((prev) => prev + 1)}>count++</button>
			<br />
			<SecondParent count={count} />
		</>
	);
};

export default App;
