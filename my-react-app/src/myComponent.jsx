import React, {useState}from 'react';

function myComponent(){
    let [name, setName] = useState();
    const updateName=() => {
        name="hermoine";
        console.log(name);
    }
    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
    </div>)

}
export default myComponent