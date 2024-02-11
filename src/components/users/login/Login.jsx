import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {

    const URL_REQRES = import.meta.env.VITE_API_URL_REQRES

    const navigation = useNavigate();

    const [user, setUser] = useState({
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    })

    const [loding, setLoding] = useState(false);

    const [error, setError] = useState();

    const submit = (e) => {
        e.preventDefault();
        
        setError(null);
        setLoding(true);

        axios.post(`${URL_REQRES}login`, user)
        .then(data => {
            setLoding(false);
            localStorage.setItem("token", data.data.token);
            navigation("/");
        })
        .catch(e => {
            setLoding(false)
            setError(e);
            console.table(e);
        })
    }

    if(localStorage.getItem("token")) return <Navigate to="/" />

    return (
        <div className="login-container">
            <h2>Iniciar sesión</h2>
            <span className="label">JeelsCript</span>
            <form onSubmit={submit}  method="post">
                <div className="field">
                    <label htmlFor="email">Correo electronico (default: eve.holt@reqres.in)</label>
                    <input onChange={(e) => {
                        setUser({
                            ...user,
                            email: e.target.value 
                        })
                    }} type="text" name="email" value={user.email}/>
                </div>
                <div className="field">
                    <label htmlFor="password">Contraseña (default: cityslicka)</label>
                    <input onChange={(e) => {
                        setUser({
                            ...user,
                            password: e.target.value 
                        })
                    }} type="password" name="password" id="password" value={user.password} />
                </div>
                <div className="submit">
                    <input type="submit" value={loding ? 'Cargando...' : 'Ingresar'} />
                </div>
                <div className="field-error">
                    {
                        error && (
                            <span className="error">{error.response.data.error}</span>
                        )
                    }
                </div>
            </form>
        </div>
    )
}

export default Login;