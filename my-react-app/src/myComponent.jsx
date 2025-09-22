import React, {useState , useEffect}from 'react';


function MyComponent(){

    const [count,setCount]=useState(0);

    useEffect(()=> {
        document.title=`Count: ${count};`
    });


    function addCount(){
        setCount(c=> c + 1 );
    }

    return(<>
        <p>Count : {count}</p>
        <button onClick={addCount}>Add</button>
    </>);

}









/*function MyComponent(){
    const[car,setCar]=useState({year:2025,
                                make:"bmw",
                                model:"M5"});

    function handleYearChange(event){
        setCar(c => ({...c, year: event.target.value}));
    }

    function handleMakeChange(event){
        setCar(c=>({...car,make:event.target.value}));
    }

    function handleModelChange(event){
        setCar(c=>({...car,model:event.target.value}));
    }

    return(<div>
        <p>Your fav car is:{car.year} {car.make} {car.model}</p>

        <input type="number" value={car.year} onChange={handleYearChange}/><br/>
        <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
        <input type="text" value={car.model} onChange={handleModelChange}/><br/>
    </div>)
}*/





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