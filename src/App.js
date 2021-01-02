import React from 'react';
import './App.css';
import './components/components.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Services from './components/Services.js';
import Testimonials from './components/Testimonials.js';

function App () {
  return (
    <Router>
      <div className='App'>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/services' component={Services} />
          <Route path='/testimonials' component={Testimonials} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
