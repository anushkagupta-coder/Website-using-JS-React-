
import React, {useState }from 'react';




function MyComponent3(){
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
}

export default MyComponent3