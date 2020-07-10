import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import PageNotFound from './components/PageNotFound';
import Modal from './components/Modal';
import Hero from './components/Hero';
import About from './components/About';
function App() {
  return (
    // react fragment
    <>
      <Hero />
      <Navbar/>
      <Switch>
        <Route exact path='/' component={ProductList}/>
        <Route path='/about' component={About}/>
        <Route path='/details' component={Details}/>
        <Route path='/cart' component={Cart}/>
        <Route  component={PageNotFound}/>
      </Switch>
      <Modal/>
 </>
  );
}

export default App;
