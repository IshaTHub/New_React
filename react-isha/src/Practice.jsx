import { useState } from "react";
// import './tailwind.css';
function Practice() {
  //let counter = 2;
  let [counter, setCounter] = useState(5);
  let [count, setCount] = useState(5);

  const addValue = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1 className="bg-green-400">Counter</h1>
      <h2>counter values: {counter}</h2>
      <h2>count values: {count}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {count}</button>
    </div>
  );
}

export default Practice;
