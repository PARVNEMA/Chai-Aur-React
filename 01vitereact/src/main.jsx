import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
  return(<h1>Custom React</h1>)
}
const anotheruser="chai aur react"
const reactelement=React.createElement(
  'a',
  {href:"https://google.com",target:"_blank"},
  "Click here to Google",
  <br/>,
  anotheruser
)
const mycustom=(
  <a href='https://google.com' target='_blank'>Click to visit google</a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
    reactelement 
)
