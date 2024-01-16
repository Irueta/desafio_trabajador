//Encuestas.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Userbar from '../components/UserBar';
import NavBar from '../components/NavBar';
import MultiStepBar from '../components/MultiStepBar';
import "./Encuestas.css";
import {registerSurveyAnswers} from '../../apiDesafio';


const Encuestas = () => {
  const navigate = useNavigate();
  

    const questions = [
      {id: 1,
        title: 'Compañerismo en el trabajo.',
      questions:[

        {
          id: 1,
          title: 'Satisfacción en el trabajo.',
          question: '¿En general, cómo calificarías tu satisfacción con el entorno?',
          options: ['Muy bueno', 'Bueno', 'Malo', 'Muy malo'],
        },
        {
            id: 2,
            title: 'Implicación laboral.',
            question: '¿Te sientes comprometido/a con tu trabajo y las metas de la organización?',
            options: ['Me siento muy involucrado/a.o', 'Me siento involucrado/a.', 'Me siento poco involucrado/a.', 'No me siento involucrado/a.'],
          },
          {
            id: 3,
            title: 'Satisfacción laboral.',
            question: '¿Estas satisfecho/a con las oportunidades de crecimiento y desarrollo profesional que se te ofrecen?',
            options: ['Muy satisfecho/a', 'Satisfecho/a', 'Poco satisfecho/a.', 'Nada satisfecho/a.'],
          },
          {
            id: 4,
            title: 'Rendimiento laboral.',
            question: '¿Cómo evaluarías tu propio rendimiento en el trabajo?',
            options: ['Muy bueno', 'Bueno', 'Malo', 'Muy malo'],
          },
          {
            id: 5,
            title: 'Satisfacción Relación Laboral.',
            question: '¿Existe una comunicación efectiva entre colegas y supervisores?',
            options: ['La comunicación es muy fluida.', 'La comunicación es fluida.', 'Hay falta de comunicación.', 'La comunicación es nula.'],
          },
          {
            id: 6,
            title: 'Conciliación socio-laboral.',
            question: '¿Sientes que la organización respeta tu tiempo fuera del trabajo?',
            options: ['Totalmente', 'Casi siempre', 'Rara vez lo respeta.', 'Nunca lo respeta.'],
          },
    ]}
        
      ];

      const survey = questions[0];
      const surveyQuestions = survey.questions;
      const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
      const [answers, setAnswers] = useState(Array(surveyQuestions.length).fill(null));
      const currentQuestion = surveyQuestions[currentQuestionIndex];
    
      const handleNext = async () => {
        if (currentQuestionIndex < surveyQuestions.length) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    
        if (currentQuestionIndex === surveyQuestions.length - 1) {
          try {
            const surveyId = questions[0].id;
            const title = questions[0].title;
            alert('¡Gracias por completar la encuesta!\nSus respuestas son de gran ayuda para que podamos mejorar sus condiciones laborales.');
            await registerSurveyAnswers(surveyId, title, answers);
            navigate('/perfil');
          } catch (error) {
            console.error("Error al guardar respuestas de la encuesta:", error);
          }
        }
      };
    
      const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
          setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
      };
    
      const handleOptionChange = (event) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = event.target.value;
        setAnswers(newAnswers);
      };

      const handleBotonClick = () => {
        const confirmacion = window.confirm('¿Estás seguro de que quieres abandonar la encuesta?');
        if (confirmacion) {
          navigate('/perfil');
        } else {
          return;
        }
      };
    
      return (
        <div>
          {currentQuestion && currentQuestion.question ?
          <div className='headerEncuesta'>
          <img className='headerEncuestaImg' src="/encuestas/flecha.svg" alt="" onClick={handleBotonClick}/>
          <Link to="/perfil"><h4 className='headerEncuestaH4'>Encuesta</h4></Link>
        </div> : null
          }
          {currentQuestion && currentQuestion.question ?
            <div className='encuestasStepBar'>
            <MultiStepBar currentStep={currentQuestionIndex + 1} stepCount={surveyQuestions.length} />
          </div> : null
          }
            {currentQuestion && currentQuestion.title ? 
          <div className='divEncuestaTitle'>
            <h1 className='encuestaTitle'>{currentQuestionIndex + 1}. {currentQuestion.title}</h1>
          </div> : null
          }
          {currentQuestion && currentQuestion.question ?
          <div className='divEncuestaPregunta'>
            <p className='encuestaPregunta'>{currentQuestion.question}</p>
          </div> : null
          }
          {currentQuestion && currentQuestion.options ?
          <div className='divOpciones'>
          {currentQuestion.options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                className='encuestaInput'
                id={`option-${index}`}
                name="questionOption"
                value={option}
                checked={answers[currentQuestionIndex] === option}
                onChange={handleOptionChange}
              />
              <label className='encuestaOpcion' htmlFor={`option-${index}`}>{option}</label>
            </div>
          ))}
        </div> : null
          }
          {currentQuestion && currentQuestion.options ?
          <div className='divBotones'>
          {currentQuestionIndex > 0 && <button className='encuestaButton encuestaButton1' onClick={handlePrevious}>Anterior</button>}
          <button className='encuestaButton encuestaButton2' onClick={handleNext}>
            {currentQuestionIndex === surveyQuestions.length - 1 ? 'Finalizar' : 'Siguiente'}
          </button>
        </div> : null
        }
          
          <NavBar />
        </div>
      );
    };
    
    export default Encuestas;