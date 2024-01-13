//Encuestas.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Userbar from '../components/UserBar';
import NavBar from '../components/NavBar';
import MultiStepBar from '../components/MultiStepBar';
import "./Encuestas.css";


const Encuestas = () => {
  const navigate = useNavigate();

    const questions = [
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
        
      ];


      const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
      const [answers, setAnswers] = useState(Array(questions.length).fill(null));
      const currentQuestion = questions[currentQuestionIndex];
    
      const handleNext = () => {
        if (currentQuestionIndex < questions.length) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        }

        if (currentQuestionIndex === questions.length - 1) {
          console.log(answers);
          alert('Tus respuestas han sido guardadas.');
          navigate('/perfil');
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
    
      return (
        <div>
          <div className='headerEncuesta'>
            <Link to="/perfil"><img className='headerEncuestaImg' src="/encuestas/flecha.svg" alt="" /></Link>
            <Link to="/perfil"><h4 className='headerEncuestaH4'>Encuesta</h4></Link>
          </div>
            <div className='encuestasStepBar'>
            <MultiStepBar currentStep={currentQuestionIndex + 1} stepCount={questions.length} />
            </div>
            <div className='divEncuestaTitle'>
              <h1 className='encuestaTitle'>{currentQuestionIndex}. {currentQuestion.title}</h1>
            </div>
            <div className='divEncuestaPregunta'>
              <p className='encuestaPregunta'>{currentQuestion.question}</p>
            </div>
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
            </div>
            <div className='divBotones'>
              {currentQuestionIndex > 0 && <button onClick={handlePrevious}>Anterior</button>}
              <button onClick={handleNext}>
              {currentQuestionIndex === questions.length - 1 ? 'Finalizar' : 'Siguiente'}
            </button>
            </div>
          <NavBar />
        </div>
      );
    
      
}

export default Encuestas;



/* (
    <>
    <div className="steps-container">
        {[1,2,3,4,5,6].map((stepNumber) => (
            <span key={stepNumber}>
                {stepNumber >1 && <div className="line"></div>}
                <span className={`step-circle ${stepNumber === currentStep ? 'active' : ''}`}>
                    {stepNumber}
                </span>
            </span>
        ))}
        <div className="progress-bar-container">
            <span className="progress-indicator" style={{width:`${((currentStep - 1) /3) *100}%`,}}></span>
        </div>
    </div>
    </>
) */