import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  

  render() {
    return (
      <div className="">
        <header>
          <div id="header">
            <div className="container">
              <div className="pull-left">
                <div className="header-logo">
                  <Link className="logo" to="/">
                    <img src={require("../../assets/images/implus-logo.jpg")} alt=""/>
                  </Link>
                </div>
              </div>
              <div className="pull-right">
                <ul className="header-btns">
                  <li className="header-account dropdown default-dropdown">
                    <div className="dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="true">
                      <div className="header-btns-icon">
                        <i className="fa fa-user-o"></i>
                      </div>
                      <strong className="text-uppercase">My Account <i className="fa fa-caret-down"></i></strong>
                    </div>
                    <a className="text-uppercase">Login</a> / <a className="text-uppercase">Join</a>
                    <ul className="custom-menu">
                      <li><a><i className="fa fa-user-o"></i> My Account</a></li>
                      <li><a><i className="fa fa-heart-o"></i> My Wishlist</a></li>
                      <li><a><i className="fa fa-exchange"></i> Compare</a></li>
                      <li><a><i className="fa fa-check"></i> Checkout</a></li>
                      <li><a><i className="fa fa-unlock-alt"></i> Login</a></li>
                      <li><a><i className="fa fa-user-plus"></i> Create An Account</a></li>
                    </ul>
                  </li>
                  <li className="header-account dropdown default-dropdown">
                    <Link role="button" to="/viewcart">
                      <i className="fa fa-shopping-cart" style={{"fontSize":"22px"}}></i>
                      &nbsp;&nbsp;<strong className="text-uppercase">Cart</strong>
                    </Link>
                </li>
                  <li className="nav-toggle">
                    <button className="nav-toggle-btn main-btn icon-btn"><i className="fa fa-bars"></i></button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
