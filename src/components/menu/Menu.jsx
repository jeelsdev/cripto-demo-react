import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => {
    return (
        <nav className="main-menu">
            <ul>
                <li className='main-menu-links'>
                    <Link to={'/'}>
                        <div className="main-menu-link">
                            <span>Inicio</span>
                        </div>
                    </Link>
                </li>
                <li className='main-menu-links'>
                    <Link to={'/cripto'}>
                        <div className="main-menu-link">
                            <span>
                                Criptomonedas
                            </span> 
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;