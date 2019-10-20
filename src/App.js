import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import MainPage from './components/main/Main-Page';
import ProductDetailPage from './components/mens-clothes/Product-Detail-Page';
import Checkout from './components/checkout/Checkout';
import ProductCart from './components/product-cart/Product-Cart';
import LoginPage from './components/login/Login-Page';
import CheckoutSummary from './components/checkout-summary/Checkout-Summary';
import Payment from './components/payment/Payment';
import AddNewAddress from './components/add-new-address/Add-New-Address';
import CustomerOrders from './components/customer-orders/Customer-Orders';
import Account from './components/my-account/My-Account';
import UserAddress from './components/user-address/User-Address';
import UserProfile from './components/user-profile/User-Profile';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact name="index" path="/" component={MainPage} />
          <Route exact name="index" path="/product/:id" component={ProductDetailPage} />
          <Route exact name="index" path="/checkout" component={Checkout}/>
          <Route exact name="index" path="/viewcart" component={ProductCart}/>
          <Route exact name="index" path="/login" component={LoginPage}/>
          <Route exact name="index" path="/checkout/summary/:addressId/:userId" component={CheckoutSummary}/>
          <Route exact name="index" path="/checkout/payment" component={Payment}/>
          <Route exact name="index" path="/checkout/newAddress" component={AddNewAddress}/>
          <Route exact name="index" path="/myaccount/orders" component={CustomerOrders}/>
          <Route exact name="index" path="/checkout/updateAddress/:addressId/:userId" component={AddNewAddress}/>
          <Route exact name="index" path="/myaccount" component={Account}/>
          <Route exact name="index" path="/myaccount/address" component={UserAddress}/>
          <Route exact name="index" path="/myaccount/profile" component={UserProfile}/>
        </div>
      </Router>
    );
  }
}

export default App;
