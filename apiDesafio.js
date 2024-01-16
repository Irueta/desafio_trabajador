// apiDesafio.js

const VITE_BACKEND_HOST =
    import.meta.env.VITE_BACKEND_HOST || "http://localhost:3006";

const loginApi = async (email, password) => {
    try {
        const response = await fetch(`${VITE_BACKEND_HOST}/user/login`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        if (response.ok) {
            const data = await response.json();
            return { response, data };
        } else {
            return { response, data: null };
        }
    } catch (error) {
        console.error("Error en la solicitud:", error.message);
        throw error;
    }
};

const fetchUserData = async () => {
    try {
        const response = await fetch(`${VITE_BACKEND_HOST}/user/info`, {
            method: "GET",
            credentials: "include",  
        });


        if (response.ok) {
            const data = await response.json();
            return { response, data };
        } else {
            console.error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
            return [response, null];
        }
    } catch (error) {
        console.error("Error en la solicitud:", error.message);
        return [null, null];
    }
};



//funcion para registrar emocion
const registerEmotion = async (emotion, timerStatus) => {
    try {
        const response = await fetch(`${VITE_BACKEND_HOST}/time/register`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ emotionType: emotion, registerType: timerStatus }),
        });
        if (response.ok) {
            const data = await response.json();
            return { response, data };
        } else {
            return { response, data: null };
        }
    } catch (error) {
        console.error("Error en la solicitud:", error.message);
        throw error;
    }
};

//funcion para registrar actividad
const registerActivity = async (activity) => {
    try {
        const response = await fetch(`${VITE_BACKEND_HOST}/user/activity`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ activity }),
        });
        if (response.ok) {
            const data = await response.json();
            return { response, data };
        } else {
            return { response, data: null };
        }
    } catch (error) {
        console.error("Error en la solicitud:", error.message);
        throw error;
    }
};

//funcion para registrar encuesta
const registerSurvey = async (survey) => {
    try {
        const response = await fetch(`${VITE_BACKEND_HOST}/user/survey`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ survey }),
        });
        if (response.ok) {
            const data = await response.json();
            return { response, data };
        } else {
            return { response, data: null };
        }
    } catch (error) {
        console.error("Error en la solicitud:", error.message);
        throw error;
    }
};

//funcion para registrar respuesta de encuesta

const registerSurveyAnswers = async (surveyId, title, answers) => {

    try {
        const response = await fetch(`${VITE_BACKEND_HOST}/survey/create`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ surveyId, title, answers }),

        });
        if (response.ok) {
            const data = await response.json();
            return { response, data };
        } else {
            return { response, data: null };
        }
    } catch (error) {
        console.error("Error en la solicitud:", error.message);
        throw error;
    }
}

//funcion para cambiar contraseña
const changePassword = async (email, password, confirmPassword) => {
    try {
        const response = await fetch(`${VITE_BACKEND_HOST}/user/updatePassword`, {
            method: "PUT",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password, confirmPassword }),
        });
        if (response.ok) {
            const data = await response.json();
            return { response, data };
        } else {
            return { response, data: null };
        }
    } catch (error) {
        console.error("Error en la solicitud:", error.message);
        throw error;
    }
};



///FUNCIONES

const getDaytime = () => {  

    const date = new Date().getHours();

    if (date >= 6 && date < 12) {
        return "Buenos días";
    } else if (date >= 12 && date < 20) {
        return "Buenas tardes";
    }
    return "Buenas noches";
}



export { loginApi, fetchUserData, getDaytime, registerEmotion, registerSurveyAnswers, changePassword };