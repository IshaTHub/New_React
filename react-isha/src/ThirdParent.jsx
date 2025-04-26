import {useState} from 'react'
const ThirdParent = (props) => {

    const {handleChange} = props;

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter((prev) => prev + 1);
        handleChange?.();
    }


    return <>
    i am THIRD parent runs very slowly 
    <br/>  
    {counter}
    <br/>

    <button type='button' onClick={increment}>Increment me</button>

    </> 
}
// this function is expected to be rerendered when the state changes

export default ThirdParent