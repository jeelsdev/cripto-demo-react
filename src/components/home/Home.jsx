import { Link } from "react-router-dom";
import './Home.css'

const Home = () => {
    return (
        <>
            <div className="home">
                <h2>Bienvenido a JeelsCrip!</h2>
                <p>aqui podras ver toda al información actualizada de las criptomonedas mas populares.</p>
                <p><Link to={'/cripto'}>Ver Lista</Link></p>
            </div>
        </>
    )
}

export default Home;