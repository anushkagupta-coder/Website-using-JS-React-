import React,{useStae,useEffect} from 'react';

function digitalClock(){

    const [time,setTime] = useState(new Date());
    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setTime(new Date());
        },1000);

        return()=>{
            clearInterval(intervalId);
        }

    },[]);

    function formatTime(){
        let hours=time.getHours();
        const minutes=time.getMinutes();
        const seconds=time.getSeconds();
        const meridiem =hours >=12 ? "pm": "am";

        hours = hours % 12
    }

    return(<>
        <div className ="clock-container">
            <div className="clock">
                <span>00:00:00</span>
            </div>
        </div>
    
    </>);
}


export default digitalClock