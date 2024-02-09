import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h2>Bienvenido a JeelsCrip!</h2>
            <span>aqui podras ver toda al información actualizada de las criptomonedas mas populares.</span>
            <p><Link to={'/cripto'}>Ver Lista</Link></p>
        </>
    )
}

export default Home;