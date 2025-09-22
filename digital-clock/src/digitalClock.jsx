import React,{useStae,useEffect} from 'react';

function digitalClock(){

    const [time,setTime] = useState(new Date());
    useEffect(()=>{

    },[]);

    return(<>
        <div className ="clock-container">
            <div classNAme="clock">
                <span>00:00:00</span>
            </div>
        </div>
    
    </>);
}


export default digitalClock