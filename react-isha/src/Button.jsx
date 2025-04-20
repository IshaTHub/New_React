import { memo } from "react";
const Button = memo((props) => {
	//console.log(props);
	const { children, onClick, data, clickAction } = props; //destructuring the props
	const handleClick = () => {
		onClick?.(); // this is optional chaining '?' is used to check if the onClick exists. If it does, it will be called. If it doesn't, it will be ignored.
		clickAction?.(); // this is optional chaining for clickAction
	};
	return (
		<button onClick={handleClick}>
			{children} {data?.a?.b?.c} {/* this is optional chaining '?' */}
		</button>
	);
});

export default Button;
