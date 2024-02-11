import { Navigate, Outlet } from "react-router-dom";
import Menu from "./components/menu/Menu";
import "./App.css"

const App = () => {

    if(!localStorage.getItem("token")) return <Navigate to="/login" />;

    return (
        <>
            <Menu />
            <div className="app-container">
                <Outlet />
            </div>
        </>
    )
}

export default App;