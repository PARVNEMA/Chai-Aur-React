import React, { memo } from 'react'

function Navbar({adjective,getadjective}) {
    console.log("navbar rerendered");
  return (
    <div>

     Change

   i am an {adjective} Navbar
   <button onClick={()=>getadjective()}>Click me {getadjective()}</button>
    </div>
  )
}

export default memo( Navbar)