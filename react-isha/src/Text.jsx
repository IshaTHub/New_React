import { memo, useEffect } from "react";

const Text = memo((props) => {
	const { children, externalData } = props;


	useEffect(() => {
			console.log("externalData changed", externalData);
		}, [externalData]);

	return (
		<div>{externalData}{children}</div>
	);
});

export default Text;
