import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => {
    return (
        <nav className="main-menu">
            <ul>
                <li><Link to={'/'}>Inicio</Link></li>
                <li><Link to={'/cripto'}>Criptomonedas</Link></li>
            </ul>
        </nav>
    )
}

export default Menu;