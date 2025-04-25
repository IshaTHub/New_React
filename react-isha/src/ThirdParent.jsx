import {useState} from 'react'
const ThirdParent = (props) => {

    const {handleChaange} = props

    const [counter, setCounter] = useState(0);

    const increment = () => {
        handleChaange?.() = > {
            
        }
    }


    return <>
    i am THIRD parent runs slowly <br/>  {counter}
    <br/>

    <button type='button' onClick={() => setCounter((prev) => prev + 1)}>Increment</button>

    </> 
}
// this function is expected to be rerendered when the state changes

export default ThirdParent