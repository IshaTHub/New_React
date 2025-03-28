const Button = (props) => {
  console.log(props);
  const {children, clickAction, data } = props;
  const handleClick = () => {
    clickAction?.();  // this is optional chaining '?' is used to check if the clickAction exists. If it does, it will be called. If it doesn't, it will be ignored.
  };
  return <button onClick={handleClick}>
    {children} + " " + 
    {data?.a?.b?.c}   {/* this is optional chaining '?' */}
    </button>;
};

export default Button;
