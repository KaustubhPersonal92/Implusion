import React, { Component } from 'react';
import Header from '../header/Header.js';
import Menu from '../menu/Menu.js';
import Slider from '../slider/Slider.js';
import MensClothes from '../mens-clothes/Mens-Clothes.js';
import Footer from '../footer/Footer.js';

class LoginPage extends Component {
  constructor(props, context) {
    super(props, context); 
  }

  render() {
    return (
      <div>
        <Header/>
        <Menu/>
        <div className="login-form">
          <h2 className="text-center">Log in</h2>       
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Username" required="required"/>
          </div>
          <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" required="required"/>
          </div>
          <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">Log in</button>
          </div>
          <div className="clearfix">
            <a href="#" className="pull-right">Forgot Password?</a>
          </div>        
          <p className="text-center"><a href="#">Create an Account</a></p>
        </div> 
        <Footer/>
      </div>
    );
  }
}

export default LoginPage;
