import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [facts, setFacts] = useState([])
  useEffect(()=>{
    axios.get('https://server1-vgcz.onrender.com/api/facts')
    .then((response)=>{
      setFacts(response.data);
    })
  })
  return (
    <>
     <h1>Hello</h1>

    <p>facts: {facts.length}</p>
    {
      facts.map((fact)=>(
        <div key={fact.id}>
          <h3>{fact.title}</h3>
          <h4>{fact.content}</h4>
        </div>
      ))
    }
    </>
  )
}

export default App
