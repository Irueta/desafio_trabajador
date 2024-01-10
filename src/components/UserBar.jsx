import React, { useEffect, useState } from "react";
import { fetchUserData, getDaytime } from "../../apiDesafio.js";
import "./UserBar.css";

const Userbar = () => {
    const [userData, setUserData] = useState(null);
    const [daytime, setDaytime] = useState(null);





    /* useEffect(() => {
        const fetchData = async () => {
            const {response,data} = await fetchUserData();
            console.log("fetchUserData",await fetchUserData());
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
    } */

    return (

        <div className="userbar_container">
            <img className="foto" src="/userBar/woman1.png" alt="" />
            <div className="cargoNombre">
                <h4 className="cargo">Directora de marketing</h4>
                <h3 className="nombre">Ane Eguzkiza</h3>
            </div>
            <div className="timer">00:00</div>
            
        </div>
    );
}

export default Userbar;