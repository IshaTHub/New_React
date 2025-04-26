import { useCallback } from "react";
import ThirdParent from "./ThirdParent";
const SecondParent = (props) => {

    const {count} = props;
	const handleChange = useCallback(() => {
		console.log("state changed in second parent", count);
	}, []);
	return (
		<>
			i am second parent <br />
			<ThirdParent handleChange={handleChange} />
		</>
	);
};
// this function is expected to be rerendered when the state changes

export default SecondParent;
