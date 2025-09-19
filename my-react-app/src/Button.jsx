function Button(){

    const handleClick3 =(e)=> e.target.textContent="ouchh!!!"
    let count=0;
    const handleClick=(name)=> {
        if(count<3){
            count++;
            console.log(`${name} you clicked me ${count} times`);

        }
        else{
            console.log(`${name} stop clicking me!!!`);
        }

    };

    //const handleClick2=(name)=> console.log( `${name} stop clicking me` );
    return(
        <button onClick={(e)=> handleClick3(e)}>click me </button>
    );
}
export default Button