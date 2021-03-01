import './testimonials.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

export function Testimonials () {
  const Testimonials = [
    {
      id: '1',
      quote: 'Una profesora excelente cuyas clases son muy amenas. Se adapta a las necesidades de los alumnos, tanto de nivel como de intereses. 100% aconsejable.',
      name: 'Frederica',
      year: '11 jun 2020'
    },
    {
      id: '2',
      quote: 'Rebecca ha sido una profesora muy buena. Sus clases son dinámicas y participativas. Se implica mucho contigo.',
      name: 'Ana',
      year: '12 feb 2019'
    },
    {
      id: '3',
      quote: 'Rebeca es una profesora súper profesional y muy dinámica. Es imposible aburrirse con ella y sus clases son muy didácticas. Estoy muy contento con ella.',
      name: 'Josè de Studec',
      year: '31 ene 2019'
    },
    {
      id: '4',
      quote: 'Es una profesora excelente, hace las clases muy amenas con muy buenos materiales y te da muchísima confianza para que hables y te sueltes en inglés. En pocos meses hemos avanzado muchísimo además de conseguir una motivación extra! 100% recomendada!!',
      name: 'Carmen',
      year: '03 abr 2017'
    },
    {
      id: '5',
      quote: 'Es una profesora muy profesional y cualificada, siempre tiene preparadas las clases, son muy buenas y se aprende mucho, combina el aprendizaje con la diversión. Es feliz dando las clases, siempre con una sonrisa y eso se transmite al alumno.',
      name: 'Daniel',
      year: '27 mar 2017'
    },
    {
      id:'5',
      quote: "We are delighted with Rebecca's classes. Her classes are very enjoyable, dynamic and entertaining. The best teacher we could find.",
      name: 'Mila',
      year: '4th Jan 2021'
    },
    {
      id: '6',
      quote: 'Great teacher. She has a method for teaching English, and always adapts to the goals and characteristics of the student. Her classes are enjoyable and very instructive at the same time, and she is a very pleasant person, which is essential for you to feel comfortable, and to be able to gradually loosen up when speaking in English.',
      name: 'Guadalupe',
      year: '4th Jan 2021'
    },
    {
      id:'7',
      quote: 'She is a wonderful teacher, she knows the content and how to adapt her classes to the students. Very good.',
      name: 'Ascension',
      year: '18th Jan 2021'
  ];

  return (
    <div className='content'> 
      <div className='backgroundImage'> 
        <div className='quotes'>
          {Testimonials.reverse().map((data) => ( 
            <li key={data.id}> 
              <div className='card'>
                <p><FontAwesomeIcon icon={faQuoteLeft} /> {data.quote} <FontAwesomeIcon icon={faQuoteRight} /></p>  
                <div className='card-container'>
                  <h4><b>{data.name}</b></h4>
                  <p>{data.year}</p>
                </div>
              </div>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

