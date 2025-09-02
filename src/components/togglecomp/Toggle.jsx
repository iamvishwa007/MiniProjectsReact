import React from 'react'
function Toggle({setTheme}) {
  return (
   <div className='toggle-out'>
            <button className="toggle-btn" id="light" onClick={()=>setTheme("light")}>Light</button>
            <button className="toggle-btn" id="black" onClick={()=>setTheme("dark")}>Dark</button>
    </div>
  )
}

export default Toggle
