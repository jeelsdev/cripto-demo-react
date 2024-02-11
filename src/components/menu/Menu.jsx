import { Link, useNavigate } from "react-router-dom";
import "./menu.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Menu = () => {
  const user = useContext(UserContext);
  const navigation = useNavigate();

  return (
    <nav className="main-menu">
      <ul>
        <div className="right-group">
          <li className="main-menu-links">
            <Link to={"/"}>
              <div className="main-menu-link">
                <span>Inicio</span>
              </div>
            </Link>
          </li>
          <li className="main-menu-links">
            <Link to={"/cripto"}>
              <div className="main-menu-link">
                <span>Criptomonedas</span>
              </div>
            </Link>
          </li>
          <li className="main-menu-links">
            <Link to={"/profile"}>
              <div className="main-menu-link">
                <span>Perfil de {user.first_name}</span>
              </div>
            </Link>
          </li>
        </div>
        <div className="left-group">
          <li className="main-menu-links">
            <a
              onClick={() => {
                localStorage.removeItem("token");
                navigation("/login");
              }}
              href=""
            >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                  />
                </svg>
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Menu;
