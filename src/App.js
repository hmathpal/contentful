import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';


import Home from './components/home/home'
import Products from './components/products/products'
import Services from './components/services/services'
import Headless from './components/headless/headless'
import Mapbox from './components/mapbox/mapbox'
import Page from './components/page/page'


function App() {
  return (
    <main>  
      <Header></Header>
            <Switch>
                <Route path="/" component={Home} exact />
                
                <Route path="/course" component={Home} />
                <Route path="/products" component={Products} />
                <Route path="/services" component={Services} />
                <Route path="/headless" component={Headless} />
                <Route path="/mapbox" component={Mapbox} />
                <Route path="/page/:id" component={Page} />
            </Switch>

            <Footer></Footer>
        </main>
    
  );
}

export default App;
