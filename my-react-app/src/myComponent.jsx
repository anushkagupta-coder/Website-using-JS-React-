import React, {useState}from 'react';

function MyComponent(){

    const [name, setName] = useState();
    const[age,setAge]=useState(0);

    const updateName=() => {
        setName("hermoine")
    }

    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age:{age}</p>
        <button onClick={incrementAge}>Increment Age</button>
    </div>)

}
export default MyComponent