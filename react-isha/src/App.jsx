import { useState } from "react";
import Button from "./Button.jsx";
import Text from "./Text.jsx";
const App = () => {
  const handleClick = () => {
    console.log("i was clicked from parent");
  };

  const [text, setText] = useState([
    {
      id: 1,
      text: "Hello",
    },
    {
      id: 2,
      text: "World",
    },
    {
      id: 3,
      text: "React",
    },
    {
      id: 4,
      text: "JavaScript",
    },
    {
      id: 5,
      text: "CSS",
    },
    {
      id: 6,
      text: "HTML",
    },
  ]);

  const addMoreText = () => {
    setText([...text, { id: 7, text: "New Text" }]);
  };

  return (
    <>
      <Button data={{ a: { b: { c: "123" } } }} clickAction={handleClick}>
        Click me
      </Button>{" "}
      {/* we are recieving clickAction as a prop from Button */}
      <div>
        {text.map((item) => (
          <Text key={text.id}>{item.text}</Text>
        ))}
        <Button clickAction={addMoreText}>Add Text</Button>
      </div>
    </>
  );
};

export default App;

// data={{a:{b:{c:'123'}}}} clickAction={handleClick} are children of Button component.
// we are passing data and clickAction as props to Button component.

// importance of key in react
// When we are rendering similar items in an array then react has to know which item
// has been updated. So it can optimize the diffing cycle. It is important for performance and optimization.
// React uses the key to identify which items have been updated, added or removed.
// It is recommended to use unique keys for each item in the array.
// Keys should be stable, predictable, and unique.
// Keys should not be index of the item in the array.
// Keys should not be random numbers.
