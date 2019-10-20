import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div id="navigation">
        <div className="container">
          <div id="responsive-nav">
            <div className="menu-nav">
              <span className="menu-header">Menu <i className="fa fa-bars"></i></span>
              <ul className="menu-list">
                <li><a>Home</a></li>
                <li className="dropdown mega-dropdown full-width"><a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Men <i className="fa fa-caret-down"></i></a>
                <div className="custom-menu">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="hidden-sm hidden-xs">
                        <a className="banner banner-1">
                          <img src="./img/banner07.jpg" alt=""/>
                          <div className="banner-caption text-center">
                            <h3 className="white-color text-uppercase">Men’s</h3>
                          </div>
                        </a>
                      </div>
                      <hr/>
                      <ul className="list-links">
                        <li>
                          <h3 className="list-links-title">Categories</h3></li>
                        <li><a>Women’s Clothing</a></li>
                        <li><a>Men’s Clothing</a></li>
                        <li><a>Phones & Accessories</a></li>
                        <li><a>Jewelry & Watches</a></li>
                        <li><a>Bags & Shoes</a></li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <div className="hidden-sm hidden-xs">
                        <a className="banner banner-1">
                          <img src="./img/banner08.jpg" alt=""/>
                          <div className="banner-caption text-center">
                            <h3 className="white-color text-uppercase">Accessories</h3>
                          </div>
                        </a>
                      </div>
                      <hr/>
                      <ul className="list-links">
                        <li>
                          <h3 className="list-links-title">Categories</h3></li>
                        <li><a>Women’s Clothing</a></li>
                        <li><a>Men’s Clothing</a></li>
                        <li><a>Phones & Accessories</a></li>
                        <li><a>Jewelry & Watches</a></li>
                        <li><a>Bags & Shoes</a></li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <div className="hidden-sm hidden-xs">
                        <a className="banner banner-1">
                          <img src="./img/banner09.jpg" alt=""/>
                          <div className="banner-caption text-center">
                            <h3 className="white-color text-uppercase">Bags</h3>
                          </div>
                        </a>
                      </div>
                      <hr/>
                      <ul className="list-links">
                        <li>
                          <h3 className="list-links-title">Categories</h3></li>
                        <li><a>Women’s Clothing</a></li>
                        <li><a>Men’s Clothing</a></li>
                        <li><a>Phones & Accessories</a></li>
                        <li><a>Jewelry & Watches</a></li>
                        <li><a>Bags & Shoes</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
