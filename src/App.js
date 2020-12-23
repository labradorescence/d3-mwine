import {Runtime, Inspector} from '@observablehq/runtime';
import React, {useEffect, useRef} from 'react';
import sunburst from './@d3/zoomable-sunburst';
import ReviewPage from './components/ReviewPage.js'
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';

//import { MemoryRouter, Switch, Route } from 'react-router-dom';
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import { LinkContainer } from 'react-router-bootstrap';


export default function App() {
  const ref = useRef();

  useEffect(
    () => {
      const runtime = new Runtime();
      runtime.module(sunburst, (name) => {
        if (name === "chart") {
          return new Inspector(ref.current);
        }
      });
      return () => runtime.dispose();
    },
    []
  );

  return (
  <div className = "App">
    <div className = "Nav">
      <Router>
        <Switch>
          <Route exact path="/" component = {Home}/>
        </Switch>
      </Router>
    </div>
      
      <div className = "d3">
          <h1>Hello world, let's do wine tasting with Greem Jellyfish</h1>
          <div ref={ref} />
          <ReviewPage />
      </div>
    
  </div>
  );
}