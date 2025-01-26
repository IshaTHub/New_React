import "./App.css";
import Card from "./Components/card.jsx";

function App() {
  let myObj = {
    name: "The Lord of Rings",
    rating: "8.2",
  };

  return (
    <>
      <Card channel="HBO" obj={myObj} />
      <Card channel="HBO" obj={myObj} />
    </>
  );
}

export default App;
