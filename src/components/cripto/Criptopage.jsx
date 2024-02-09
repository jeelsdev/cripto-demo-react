import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Criptopage.css'
import dayjs from "dayjs";

const Criptopage = () => {

    const API_URL = import.meta.env.VITE_API_URL;
    const params = useParams();

    const [cripto, setCripto] = useState();
    const [history, setHistory] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}assets/${params.id}`)
        .then((data) => {
            setCripto(data.data.data);
        }).catch((error) => {
            console.error("Este es un error: " + error.message);
        });
    }, [])
    
    useEffect(() => {
        axios.get(`${API_URL}assets/${params.id}/history?interval=d1`)
        .then((data) => {
            console.log(data.data.data);
            setHistory(data.data.data)
        }).catch(e=>console.error(e.message()))
    },[]);

    if(!cripto) return <span>cargando...</span>

    return (
        <>
            <div className="cripto-page">
                <h2>{cripto.name}</h2>
                <div className="cript-page-info">
                    <div className="info">
                        <span>Rank:</span>    
                        <span>{cripto.rank}</span>
                    </div>    
                    <div className="info">
                        <span>Simbolo:</span>    
                        <span>{cripto.symbol}</span>
                    </div>    
                    <div className="info">
                        <span>Precio:</span>    
                        <span>{cripto.priceUsd}</span>
                    </div>    
                    <div className="info">
                        <span>Variación:</span>    
                        <span>{cripto.changePercent24Hr}</span>
                    </div>    
                    <div className="info">
                        <span>Suministro:</span>    
                        <span>{cripto.supply}</span>
                    </div>    
                </div> 
            </div>
            <div className="cripto-page">
                <h2>Historial</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Precio</th>
                        </tr> 
                    </thead>
                    <tbody className="nose">
                    {history.map(({time, priceUsd, date})=>(
                            <tr key={time}>
                                <td>{new Date(date).toLocaleDateString()}</td>
                                <td>{parseFloat(priceUsd)}</td>
                            </tr>
                        ))
                    }

                    </tbody>  
                </table>
            </div>
        </>
    )
}

export default Criptopage;