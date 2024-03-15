import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter,setcounter]=useState(15);
let addvalue=()=>{
  // console.log("value added",Math.random());
  if(counter<20){
  setcounter(counter+1);}
}

let removevalue=()=>{
  if(counter>0){
  setcounter(counter-1);}
}
  return (
    <>
      <h2>Chai aur react</h2>
     <h3>value : {counter}</h3>
    <button onClick={addvalue}>Add Value:{counter}</button>
    <br />
    <button onClick={removevalue}>Remove value:{counter}</button>
    </>
  )
}

export default App
