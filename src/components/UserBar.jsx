import React, { useEffect, useState } from "react";
import { fetchUserData, getDaytime } from "../../apiDesafio.js";
import "./UserBar.css";
import { useLocation } from 'react-router-dom'; 
import Timer from "./Timer.jsx";

const Userbar = () => {
    const location = useLocation();
    const isProfileRoute = location.pathname === '/perfil';
  

    return (

        <div className={`userbar_container ${isProfileRoute ? 'no-border' : ''}`}>
            <img className="foto" src="/userBar/woman1.png" alt="" />
            <div className="cargoNombre">
                <h4 className="cargo">Directora de marketing</h4>
                <h3 className="nombre">Ane Eguzkiza</h3>
            </div>
            <Timer />

            
        </div>
    );
}

export default Userbar;