import React from 'react';
import ThirdParent from './ThirdParent';
const SecondParent = () => {

    const handleChange = () =>{
        console.log("state changed in second parent")
    }
    return <>
    i am second parent
    <ThirdParent handleChange={handleChange} />
    </>
}
// this function is expected to be rerendered when the state changes

export default SecondParent;