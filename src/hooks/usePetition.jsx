import axios from "axios";
import { useEffect, useState } from "react";

const usePetition = (endpoint) => {

    const API_URL = import.meta.env.VITE_API_URL;

    const [use, setUse] = useState();

    useEffect(() => {
        axios.get(`${API_URL}${endpoint}`)
        .then((data) => {
            setUse(data.data.data);
        }).catch((error) => {
            console.error("Este es un error: " + error.message);
        });
    }, [])

    return use;
}

export default usePetition;