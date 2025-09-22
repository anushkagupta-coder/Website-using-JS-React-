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
    const [cars,setCars]=useState([]);
    const [carYear,setCarYear]=useState(new Date().getFullYear());
    const [carMake,setCarMake]=useState("");
    const [carModel,setCarModel]=useState("");

    function handleAddCar(){
        const newCar={year: carYear ,
                     make:carMake, 
                    model:carModel};

        setCars(c=>[...c,newCar]);

        seatCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");

    }

    function handleRemoveCar(index){

    }
    function handleYearChange(event){
        setCarYear(event.target.value);
    }

    function handleMakeChange(){
        setCarMake(event.target.value);
    }

    function handleModelChange(){
        setCarModel(event.target.value);
    }

    return(
        <div>
            <h2>list of car objects</h2>
            <ul>
                {cars.map((car,index)=>
                
                <li
                    key={index}>
                        {car.year} {car.make} {car.model}
                </li>)}
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange}/><br/>
            <input type="text" value={carMake} onChange={handleMakeChange}
                        placeholder="ENTER CAR MAKE"/><br/>
            <input type="text" value={carModel} onChange={handleModelChange}
                            placeholder="ENTER CAR MODEL"/><br/>
            <button onClick={handleAddCar}>add car</button>
        </div>
    );
}

*/


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
    const [name,setName]=useState("");
    const [quantity,setQuantity]=useState(); 
    const [comment,setComment]=useState("");
    const [payment,setPayment]=useState("");
    const [shipping,setShipping]=useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShipiingChange(event){
        setShipping(event.target.value);
    }

    return(<div>
        <input value={name} onChange={handleNameChange}/>
        <p>ENTER UR NAME: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type="number"/>
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange}
        placeholder="enter delivery instructions"/>
        <p>comment:{comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">select an option </option>
            <option value="visa">visa </option>
            <option value="mastercard">mastercard</option>
            <option value="giftcard">giftcard</option>
        </select>
        <p>Payment:{payment}</p>

        <label>
            <input type="radio" value="pick up"
                checked={shipping ==="pick up"}
                onChange={handleShipiingChange}/>
            pick up 
        </label><br/>

        <label>
            <input type="radio" value="delivery"
                checked={shipping ==="delivery"}
                onChange={handleShipiingChange}/>
            delivery 
        </label>
        <p>shipping:{shipping}</p>
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