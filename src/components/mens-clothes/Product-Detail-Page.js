import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productAction from '../../actions/productAction';
import Header from '../header/Header.js';
import Menu from '../menu/Menu.js';
import Footer from '../footer/Footer.js';
import { Redirect } from 'react-router';

class ProductDetailPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state={
      productInfo:{
        "productName": '',
        "productSize": '',
        "productPrice": '',
        "productAvailability": '',
        "productImage": '',
        "imageLoad": true
      },
      addToCartCounter:0,
      cart:{
        productId: '',
        userId: '',
        price:''
      },
      navigate: false,
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    var cart = this.state.cart;
    cart.price= this.state.productInfo.productPrice;
    cart.quantity =1;
    this.setState({cart: cart});
    this.props.actions.addToCart(this.state.cart).then(response=>{
      console.log("response---", response);
      if(response.status === 200) {
        this.setState({navigate: true});
      }
    });
  }

  componentWillMount() {
    var cart = this.state.cart;
    cart.productId = this.props.match.params.id
    var productId = this.props.match.params.id 
    this.setState({cart: cart})
    if(productId) {
      this.props.actions.loadProductData(productId).then(response=>{
        if(response.status === 200) {
          var productInfo = this.state.productInfo;
          productInfo.productName= response.data.Name;
          productInfo.productPrice= response.data.Price;
          productInfo.productAvailability= response.data.Availability;
          productInfo.productImage= response.data.Product_Image;
          productInfo.imageLoad = false;
          this.setState({productInfo: productInfo});
        }
      });
    }
  }
  
  render() {
    var productImage= '';
    const imageLoad = this.state.productInfo.imageLoad;
    if(imageLoad) {
      productImage = <img src='' alt="No image"/>
    } else {
      productImage = <img src={require('../../assets/images/'+this.state.productInfo.productImage)} alt =""/>
    }

    const { navigate } = this.state
    if (navigate) {
      return <Redirect to='/viewcart/' push={true} />
    }
    return (
      <div>
        <Header addToCartCounter={this.state.addToCartCounter}/>
        <Menu/>
        <div id="breadcrumb">
          <div className="container">
            <ul className="breadcrumb">
              <li><a>Home</a></li>
              <li><a>Products</a></li>
              <li><a>Category</a></li>
              <li className="active">{this.state.productInfo.productName}</li>
            </ul>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="product product-details clearfix">
                <div className="col-md-6">
                  <div id="product-main-view">
                    <div className="product-view">
                      {productImage}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product-body">
                    <h4 className="product-name">Implusion {this.state.productInfo.productName} T-shirt</h4>
                    <h4 className="product-price"><i className="fa fa-inr"> {this.state.productInfo.productPrice}</i></h4>
                  </div>
                  <p><strong>Availability:</strong> {this.state.productInfo.productAvailability}</p>
                  <p><strong>Brand:</strong> Implusion</p>
                  <div className="product-options">
                    <ul className="size-option">
                      <li><span className="text-uppercase">Size:</span></li>
                      <li className="active"><a>S</a></li>
                      <li><a>XL</a></li>
                      <li><a>SL</a></li>
                    </ul>
                    <ul className="color-option">
                      <li><span className="text-uppercase">Color:</span></li>
                      <li className="active"><a style={{"backgroundColor":"#475984"}}></a></li>
                      <li><a style={{"backgroundColor":"#8A2454"}}></a></li>
                      <li><a style={{"backgroundColor":"#BF6989"}}></a></li>
                      <li><a style={{"backgroundColor":"#9A54D8"}}></a></li>
                    </ul>
                  </div>
                  <div className="product-btns">
                    <button className="primary-btn add-to-cart" onClick={this.addToCart}><i className="fa fa-shopping-cart"></i> Add to Cart</button>    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
    ProductImages: state.ProductImages,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPage);
