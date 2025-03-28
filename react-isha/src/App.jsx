import Button from "./Button.jsx";
const App = () => {
  const handleClick = () =>{
    console.log("i was clicked from parent");
  }
  return (
    <div>
      <Button data={{a:{b:{c:'123'}}}} clickAction={handleClick}>Click me</Button>  {/* we are recieving clickAction as a prop from Button */}
    </div>
  )
}

export default App


// data={{a:{b:{c:'123'}}}} clickAction={handleClick} are children of Button component.
// we are passing data and clickAction as props to Button component.