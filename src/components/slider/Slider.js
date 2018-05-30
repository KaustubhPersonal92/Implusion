import React, { Component } from 'react';

class Slider extends Component {
  render() {
    return (
      <div id="home">
        <div className="container">
          <div className="home-wrap">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="item active">
                  <img src={require("../../assets/images/banner01.jpg")} alt=""/>
                </div>
                <div className="item">
                  <img src={require("../../assets/images/banner02.jpg")} alt=""/>
                </div>
              
                <div className="item">
                  <img src={require("../../assets/images/banner03.jpg")} alt="" />
                </div>
              </div>
              <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
