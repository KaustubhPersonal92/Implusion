import React, { Component } from 'react';

class Category extends Component {
  render() {
    return (
      <div className="wrapper">
        <header>
          <h4>Interests</h4>
        </header>
        <div className="grid">
          <div className="grid__item one-third medium-down--one-whole">
            <div className="box">
              <a className="zoom text-overlay">
                <figure className="animation-label-overlay"> 
                  <img src={require("../../assets/images/Dil_se_desi_collection_2_1600x.jpg")} alt=""/>
                </figure>
              </a> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
