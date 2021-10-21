import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Index from './components/Index';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import _404 from './components/_404';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/404" component={_404} />
        <Redirect to="/404" />
      </Switch>
      <div style={{paddingTop:'8rem'}}>&nbsp;</div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
