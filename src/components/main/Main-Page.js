import React, { Component } from 'react';
import Header from '../header/Header.js';
import Slider from '../slider/Slider.js';
import MensClothes from '../mens-clothes/Mens-Clothes.js';
import Footer from '../footer/Footer.js';
import lodash from 'lodash';


class MainPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state={
      hideCartIcon:false
    }
    this.uuidv4(6, '0123456789abcdefghijklmnopqrstuvwxyz');
  }

  uuidv4(length, chars) {
    if(lodash.isEmpty(localStorage.getItem("uniqueId"))) {
      var result = '';
      for (var i = length; i > 0; --i)  {
        result += chars[Math.round(Math.random() * (chars.length - 1))];
      }
      localStorage.setItem("uniqueId", result);
    } else { 
    } 
  }
  
  render() {
    return (
      <div>
        <Header hideCartIcon={this.state.hideCartIcon}/>
        <Slider/>
        <MensClothes/>
        <Footer/>
      </div>
    );
  }
}

export default MainPage;
