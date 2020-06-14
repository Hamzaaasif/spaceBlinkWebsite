import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Router from './Routers/routers'
import Header from '../src/Pages/header'
import Footer from '../src/Pages/footer'
import layout from './Pages/layout.module.css';

const App = ()=> (

  <BrowserRouter >
    
    <Header/>

    <Router/>

    <Footer/>
  </BrowserRouter>
)

export default App;
