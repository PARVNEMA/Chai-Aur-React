import { useState } from 'react'

function App() {
  const [color,setcolor]=useState("olive")

  return (
    <div className="w-full h-screen duration-200"  style={{backgroundColor:color}}>
    
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
        <button  onClick={()=>setcolor("red")}
        className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"red" , color:"white"}}>Red</button>
        <button  onClick={()=>setcolor("green")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"green" , color:"white"}}>green</button>
        <button  onClick={()=>setcolor("yellow")}
        className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"yellow" , color:"violet"}}>yellow</button>
        <button  onClick={()=>setcolor("aqua")}
        className='outline-none px-4 py-1 rounded-full shadow-lg ' style={{backgroundColor:"aqua", color:"white"}}>aqua</button>
        <button  onClick={()=>setcolor("brown")}
        className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"brown" , color:"white"}}>brown</button>
        <button  onClick={()=>setcolor("pink")}
         className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"pink" , color:"white"}}>pink</button>
        <button  onClick={()=>setcolor("purple")}
        className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"purple" , color:"white"}}>purple</button>
        <button  onClick={()=>setcolor("gray")}
        className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"gray" , color:"white"}}>gray</button>
        <button  onClick={()=>setcolor("white")}
        className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"white" }}>white </button>
      </div>
    </div>
    </div>
  )
}

export default App
