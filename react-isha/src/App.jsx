import React from "react";
import { useEffect, useState } from "react";
import Text from "./Text";
const App = () => {
	const [data1, setData1] = useState(0);
	const [data2, setData2] = useState(0);

	return (
		<>
			<Text externalData={data1} />

			<br />
			<button onClick={() => setData1((prevData) => prevData + 1)}>
				click me
			</button>
			<br />
			<Text externalData={data2} />
			<br />
			<button onClick={() => setData2((prevData) => prevData + 1)}>
				Update
			</button>
		</>
	);
};

export default App;
