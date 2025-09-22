import React, {useState , useEffect}from 'react';


function MyComponent(){

    const [count,setCount]=useState(0);
    const [color,setColor]=useState("green");

    useEffect(()=> {
        document.title=`Count: ${count} ${color}`;

    },);
// [] uper ka change hoga just once  
//[value] uper bhi chnage hoga everytime the value chanegs or u press count

    function addCount(){
        setCount(c=> c + 1 );
    }

    function subtractCount(){
        setCount(c=> c - 1 );
    }

    function changeColor(){
        setColor(c =>c=== "green" ? "red" :"green" );
    }

    return(<>
        <p style={{color: color}}>Count : {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button><br/>
        <button onClick={changeColor}>Change Color</button>
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





export default MyComponent