
import React, {useState}from 'react';




function MyComponent2(){
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

export default MyComponent2