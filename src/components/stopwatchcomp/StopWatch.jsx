import React, { useRef, useState } from 'react'
import './StopWatch.css'

function StopWatch() {

    const[timer,setTimer]=useState(0);
    const[isRunning,SetIsRunning]=useState(false);
    const intervalRef=useRef(null);
    const startTimer=()=>{
        if(isRunning) return ;
        SetIsRunning(true);
        intervalRef.current=setInterval(()=>{
            setTimer((prev)=>prev+1);
        },1000)
    }
    const stopTimer=()=>{
         if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
        SetIsRunning(false);
    }
    const resetTimer=()=>{
         stopTimer(); 
        setTimer(0);
       
    }
  
    return (
      <div className='outer-c'>
          <div className="c-in">
             <h1>Timer : {timer}</h1>
          </div>
          <div className="d-in">
              <div className="d-in-inside">
                  <button onClick={startTimer}>Start</button>
                  <button onClick={stopTimer}>Stop</button>
                  <button onClick={resetTimer}>Reset</button>
              </div>
          </div>
         
      </div>
    )
}

export default StopWatch
