import { useState } from 'react'

import './App.css'
import Card from './components/card';

function App() {
  const [count, setCount] = useState(0)
 let myobj={
  name:"chai",
  age:22
 }
  return (
    <> 
    <Card username="chaiaurcode" age="55"/>
   <Card username="naman" age="22"/>
    </>
   
  )
}

export default App
