//import React from "react";
import {  useState } from "react";
//import Text from "./Text";
import Timer from "./Timer";
const App = () => {

  const [showTimer, toggleTimer] = useState(true);

  // const ToggleTimer = () => {
  //   toggleTimer(false);
  // }

	return (
		<>
    {showTimer && <Timer customText ="good clockz" />}
      <button onClick={() => toggleTimer(!showTimer)}>Remove timer</button>

		</>
	); 
};

export default App;
