function Button(){

    const handleClick=()=> console.log("OUCH!!!")
    return(
        <button onClick={handleClick}>click me </button>
    );
}
export default Button