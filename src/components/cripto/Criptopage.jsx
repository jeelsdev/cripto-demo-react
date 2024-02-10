import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Criptopage.css'

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
            <div className="cripto-page">
                <div className="cripto-info">
                    <div className="cripto-info-head">
                        <div className="cripto-info-head-rank">
                            <span>Ranking:</span>    
                            <span>{cripto.rank}</span>
                        </div>
                        <h2>{cripto.name}</h2>  
                        <span className="label-symbol">{cripto.symbol}</span>
                    </div>
                    <div className="cripto-info-body">
                        <div className="info">
                            <ul>
                                <li className="info-li">Price ($): <span className="info-label">{cripto.priceUsd}</span></li>
                                <li className="info-li">Supply: <span className="info-label">{cripto.supply}</span></li>
                                <li className="info-li">MaxSupply: <span className="info-label">{cripto.maxSupply}</span></li>
                                <li className="info-li">Volume 24Hr ($): <span className="info-label">{cripto.volumeUsd24Hr}</span></li>
                                <li className="info-li">Change 24Hr (%): <span className="info-label">{cripto.changePercent24Hr}</span></li>
                            </ul>
                        </div>    
                    </div>
                </div> 
                <div className="cripto-history">
                    <h2>Historial</h2>
                    <table className="history-table">
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Precio</th>
                            </tr> 
                        </thead>
                        <tbody>
                        {history.map(({time, priceUsd, date})=>(
                                <tr key={time}>
                                    <td className="history-table-date">{new Date(date).toLocaleDateString()}</td>
                                    <td className="history-table-price">{parseFloat(priceUsd)}</td>
                                </tr>
                            ))
                        }

                        </tbody>  
                    </table>
                </div>
            </div>
    )
}

export default Criptopage;