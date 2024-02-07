import { useEffect, useState } from "react"
import axios from "axios";

function App() {

  const API_URL = import.meta.env.VITE_API_URL;
  const [cript, setCript] = useState();

  useEffect(()=>{
    axios.get(`${API_URL}assets`)
    .then((data) => {
      console.log(data)
      setCript(data.data.data);
     
    })
    .catch(()=>{
      console.error("Failed to operation");
    })
  }, [])

  if(!cript) return <span>cargando...</span>

  return (
    <>
     <h2>Lista de criptomonedas</h2>
     <ol>
      {cript.map(({id, name, priceUsd})=>(
        <li key={id}>Name: {name} Price: {priceUsd}</li>
      ))}
     </ol>
    </>
  )
}

export default App
