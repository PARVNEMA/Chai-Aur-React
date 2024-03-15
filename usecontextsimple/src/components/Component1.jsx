
import React, { useContext } from 'react'
import { countercontext } from '../context'
function Component1() {
    const value=useContext(countercontext);
    return (

    <div>Component1 {value.count}</div>

  )
}

export default Component1