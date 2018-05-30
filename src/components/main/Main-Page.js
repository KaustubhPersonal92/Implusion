import React, { Component } from 'react';
import Header from '../header/Header.js';
import Menu from '../menu/Menu.js';
import Slider from '../slider/Slider.js';
import MensClothes from '../mens-clothes/Mens-Clothes.js';
import Footer from '../footer/Footer.js';

class MainPage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Menu/>
        <Slider/>
        <MensClothes/>
        <Footer/>
      </div>
    );
  }
}

export default MainPage;
