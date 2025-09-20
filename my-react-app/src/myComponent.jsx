import React, {useState}from 'react';


function MyComponent(){
    const [name,setName]=useState("");
    const[quantity,setQuantity]=useState(); 
    const [comment,setComment]=useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    return(<div>
        <input value={name} onChange={handleNameChange}/>
        <p>ENTER UR NAME: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type="number"/>
        <p>Quantity: {quantity}</p>
        <textarea value={comment} onChange={handleCommentChange}
        placeholder="enter delivery instructions"/>
        <p>comment:{comment}</p>
    </div>)
}
/*function MyComponent(){

    const [name, setName] = useState("ANUSHKA");
    const[age,setAge]=useState(0);
    const [isEmployed,setIsEmployed]= useState(false);

    const updateName=() => {
        setName("HERMOINE")
    }

    const incrementAge=()=>{
        setAge(age+1);

    }

    const toggleEmployedStatus=()=>{
        setIsEmployed(!isEmployed);
    }

    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age:{age}</p>
        <button onClick={incrementAge}>Increment Age</button>

        <p>Is employed:{isEmployed ? "yes": "no"}</p>
        <button onClick={toggleEmployedStatus}>toggle status</button>
    </div>)

}*/
export default MyComponent