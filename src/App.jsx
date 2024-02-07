import { useEffect, useState } from "react"

function App() {

  const [cript, setCript] = useState();

  useEffect(()=>{
    fetch("https://api.coincap.io/v2/assets")
    .then((resp) => resp.json())
    .then((data) => {
      setCript(data.data);
     
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
      {cript.map(({name, priceUsd})=>(
        <li>Name: {name} Price: {priceUsd}</li>
      ))}
     </ol>
    </>
  )
}

export default App
