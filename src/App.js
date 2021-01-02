import React from 'react';
import './App.css';
import './components/components.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation.js';
import Home from './components//Home/Home.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import Services from './components/Services/Services.js';
import Testimonials from './components/Testimonials/Testimonials.js';
import Information from './components/Information/Information';

function App () {
  return (
    <Router>
      <div className='App'>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/information' component={Information} />
          <Route path='/testimonials' component={Testimonials} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
