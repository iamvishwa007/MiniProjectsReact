import React, { useState } from 'react'
import './Counter.css'

export default function Counter() {

  const [varcount,setVarCount]=useState(0);

  return (
    <div className='outer-c'>
        <div className="c-in">
           <h1>Count : {varcount}</h1>
        </div>
        <div className="d-in">
            <div className="d-in-inside">
                <button onClick={()=>setVarCount(varcount+1)}>Increment</button>
                <button onClick={()=>{
                    if(varcount>0)setVarCount(varcount-1)
                    else{
                     setVarCount(0)
                     alert("already count is zero")
                    }
                    }}>Decrement</button>
                <button onClick={()=>setVarCount(0)}>Reset</button>
            </div>
        </div>
       
    </div>
  )
}


