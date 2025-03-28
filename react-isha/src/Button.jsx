const Button = (props) => {
  console.log(props);
  const { children, onClick, data } = props; //destructuring the props
  const handleClick = () => {
    onClick?.(); // this is optional chaining '?' is used to check if the onClick exists. If it does, it will be called. If it doesn't, it will be ignored.
  };
  return (
    <button onClick={handleClick}>
      {children} {data?.a?.b?.c} {/* this is optional chaining '?' */}
    </button>
  );
};

export default Button;
