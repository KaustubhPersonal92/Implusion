import React, { Component } from 'react';
import Header from '../header/Header.js';
import Slider from '../slider/Slider.js';
import MensClothes from '../mens-clothes/Mens-Clothes.js';
import Footer from '../footer/Footer.js';

class MainPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state={
      hideCartIcon:false
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
