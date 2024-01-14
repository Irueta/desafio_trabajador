import React, { useEffect, useState } from "react";
import { fetchUserData, getDaytime } from "../../apiDesafio.js";
import "./UserBar.css";
import { useLocation } from 'react-router-dom'; 
import Timer from "./Timer.jsx";

const Userbar = () => {
    const location = useLocation();
    const isProfileRoute = location.pathname === '/perfil'|| location.pathname ==='/comunidad';
    const [userData, setUserData] = useState(null);
    const [daytime, setDaytime] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const {response,data} = await fetchUserData();
            if (response.status === 200) {
                setUserData(data);
            }
        }
const getTime=()=>{ 
    const time = getDaytime();
    setDaytime(time);
}
        getTime();
        fetchData();
    }, []);

    if (!userData) {
    
        return <div>Cargando...</div>;
        }

    return (

        <div className={`userbar_container ${isProfileRoute ? 'no-border' : ''}`}>
            <img className="foto" src="/userBar/woman1.png" alt="" />
            <div className="cargoNombre">
                <h4 className="cargo">{userData.department}</h4>
                <h3 className="nombre">{userData.name} {userData.surname}</h3>
            </div>
            <Timer />

            
        </div>
    );
}

export default Userbar;