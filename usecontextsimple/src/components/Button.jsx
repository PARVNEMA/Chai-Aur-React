import React from 'react'
// import Component1 from './Component1'
import { countercontext } from '../context'

function Button() {
  const value = React.useContext(countercontext)
  return (
    <div><button>Click {value.count}</button></div>
  )
}

export default Button