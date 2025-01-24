import {useState} from "react"
function Practice(){

  //let counter = 2;
  let [counter, setCounter] = useState(5);
  let [count, setCount] = useState(5);

  const addValue = () =>{
    
    counter = counter + 1;
    counter <=20 ? setCounter(counter): null;
  }

  const removeValue = () =>{
    count = count -1;
    count >=0 ? setCount(count): null;
    console.log(count);
  }

  return(
      <div>
        <h1>Counter</h1>
        <h2>counter value: {counter}</h2>
        <h2>count value: {count}</h2>
        <button
        onClick={addValue}>Add value {counter}</button>
        <br />
        <button onClick = {removeValue}>Remove value {count}</button>
      </div>
  );
}

export default Practice;