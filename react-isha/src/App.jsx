//import React from "react";
import {  useState } from "react";
//import Text from "./Text";
import Timer from "./Timer";
const App = () => {

  const [showTimer, toggleTimer] = useState(true);

	return (
		<>
			<Timer />
      <button onClick={removerTimer}>Remove timer</button>

		</>
	);
};

export default App;
