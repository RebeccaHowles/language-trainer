import React, {useState, useEffect} from 'react';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './components/components.css';
import { Footer, Navigation, Testimonials, Contact, Information, Services, About, Home, Mobile } from './components/index.js';


function App () {

  const links = [
		{
			text: <FontAwesomeIcon icon={faHome} />,
			path: '/',
    },
    {
			text: 'About',
			path: '/about',
    },
    {
			text: 'Services',
			path: '/services',
		},
		{
			text: 'Information',
			path: '/information',
    },
    {
			text: 'Testimonials',
			path: '/testimonials',
		},
		{
			text: 'Contact',
			path: '/contact',
		},
  ]
  
  //https://stackoverflow.com/questions/39435395/reactjs-how-to-determine-if-the-application-is-being-viewed-on-mobile-or-deskto
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
          setWidth(window.innerWidth);
      }
  useEffect(() => {
          window.addEventListener('resize', handleWindowSizeChange);
          return () => {
              window.removeEventListener('resize', handleWindowSizeChange);
          }
      }, []);

  let isMobile = (width <= 768);

  return (
    <Router>
      <div className='App'>
        <div className='header'>
          <div className='logo'>Rebecca Howles</div>
            {isMobile ? ( <Mobile links={links} /> ) : (
              <Navigation links={links} /> )}
        </div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/information' component={Information} />
          <Route path='/testimonials' component={Testimonials} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>  
      <Footer />
    </Router>
  );
}


export default App;
