import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import MainPage from './components/main/Main-Page';
import ProductDetailPage from './components/mens-clothes/Product-Detail-Page';
import Checkout from './components/checkout/Checkout';
import ProductCart from './components/product-cart/Product-Cart';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact name="index" path="/" component={MainPage} />
          <Route exact name="index" path="/product/:id" component={ProductDetailPage} />
          <Route exact name="index" path="/checkout" component={Checkout}/>
          <Route exact name="index" path="/viewcart" component={ProductCart}/>
        </div>
      </Router>
    );
  }
}

export default App;
