import axios from "axios";
import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({children}) => {

    const API_REQRES = import.meta.env.VITE_API_URL_REQRES;

    const [user, setUser] = useState({});

    useEffect(() => {
        
        axios.get(`${API_REQRES}users/2`)
        .then(data => {
            setUser(data.data.data)
        })
    }, []);

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserContextProvider};