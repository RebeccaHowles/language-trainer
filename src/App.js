import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './components/components.css';
import { Footer, Navigation, Testimonials, Contact, Information, Services, About, Home } from './components/index.js';

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
      <Footer />
    </Router>
  );
}

export default App;
