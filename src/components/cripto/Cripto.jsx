import { useEffect, useState } from "react"
import axios from "axios";
import Grid from "./Grid";
import "./Cripto.css";
import LoaderCircle from "../loaders/LoaderCircle";

function Cripto() {

  const API_URL = import.meta.env.VITE_API_URL;
  const [cript, setCript] = useState();

  useEffect(()=>{
    axios.get(`${API_URL}assets`)
    .then((data) => {
      setCript(data.data.data);
     
    })
    .catch(()=>{
      console.error("Failed to operation");
    })
  }, [])

  if(!cript) return <LoaderCircle />

  return (
    <div className="container">
     <h2 className="title">Lista de criptomonedas</h2>
     <div className="cripto-container">
      {cript.map(({id, name,rank, symbol, changePercent24Hr, priceUsd})=>(
        <Grid 
          id={id} 
          name={name}
          rank={rank}
          symbol={symbol}
          changePercent24Hr={changePercent24Hr}
          price={priceUsd} 
        />
      ))}
     </div>
    </div>
  )
}

export default Cripto;
