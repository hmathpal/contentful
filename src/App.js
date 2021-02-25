import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header/header';

import Home from './components/home/home'
import Products from './components/products/products'
import Services from './components/services/services'

function App() {
  return (
    <main>  
      <Header></Header>
            <Switch>
                <Route path="/" component={Home} exact />
                
                <Route path="/course" component={Home} />
                <Route path="/products" component={Products} />
                <Route path="/services" component={Services} />
            </Switch>
        </main>
    
  );
}

export default App;
