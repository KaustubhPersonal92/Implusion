import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productAction from '../../actions/productAction';
import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';
import { Redirect } from 'react-router';
import toastr from 'toastr';

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
        price:'',
        size:''
      },
      navigate: false,
      isActive : false,
      hideCartIcon:false
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    if(this.state.cart.size == '') {
      toastr.error("Please select size");
    } else {
      var cart = this.state.cart;
      cart.price= this.state.productInfo.productPrice;
      cart.quantity =1;
      cart.uniqueId = localStorage.getItem("uniqueId");
      this.setState({cart: cart});
      this.props.actions.addToCart(this.state.cart).then(response=>{
        console.log("response---", response);
        if(response.status === 200) {
          this.setState({navigate: true});
          this.updateUserIdInCart()
        }
      });
    }
    
  }

  componentWillMount() {
    this.getUserProfile();
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

  getSize(size) {
    var cart = this.state.cart;
    cart.size = size;
    this.setState({cart: cart});
  }

  getUserProfile() {
    this.props.actions.getUserProfileAction().then(response=>{
      if(response.status === 200) {
        var userProfile = this.state.userProfile;
        this.setState({userProfile:response.data})
      } else {
        toastr.error(response.message);
      }
    });
  }

  updateUserIdInCart() {
    var uniqueId = localStorage.getItem("uniqueId");
    this.props.actions.updateUserCartAction(uniqueId).then(response=>{
      if(response.status === 200) {
        var userProfile = this.state.userProfile;
        this.setState({userProfile:[response.data]})
      } else {
        toastr.error(response.message);
      }
    });
  }
  
  render() {
    var productImage= '';
    const imageLoad = this.state.productInfo.imageLoad;
    if(imageLoad) {
      productImage = <img src={require('../../assets/images/blank-image.png')}  alt="No image"/>
    } else {
      productImage = <img src={require('../../assets/images/'+this.state.productInfo.productImage)} alt ="" style={{"height":"400px", "width":"260px"}}/>
    }

    const { navigate } = this.state
    if (navigate) {
      return <Redirect to='/viewcart/' push={true} />
    }
    return (
      <div>
        <Header 
          addToCartCounter={this.state.addToCartCounter}
          hideCartIcon= {this.state.hideCartIcon} 
        />
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
                    <h4 className="product-name">Impulsion {this.state.productInfo.productName} T-shirt</h4>
                    <h4 className="product-price"><i className="fa fa-inr" style={{"fontSize": "18px"}}> {this.state.productInfo.productPrice}</i></h4>
                  </div>
                  <p><strong>Availability:</strong> {this.state.productInfo.productAvailability}</p>
                  <p><strong>Brand:</strong> Impulsion</p>
                  <div className="product-options">
                    <ul className="size-option">
                      <li><span>Size:</span></li>
                      <li className={this.state.cart.size == 'S'? 'active':''}><a onClick={()=>this.getSize('S')}>S</a></li>
                      <li className={this.state.cart.size == 'M'? 'active':''}><a onClick={()=>this.getSize('M')}>M</a></li>
                      <li className={this.state.cart.size == 'L'? 'active':''}><a onClick={()=>this.getSize('L')}>L</a></li>
                      <li className={this.state.cart.size == 'XL'? 'active':''}><a onClick={()=>this.getSize('XL')}>XL</a></li>
                    </ul>
                  </div>
                  <div className="product-btns">
                    <button  onClick={this.addToCart} className="success" style={{"padding": "10px", "border": "2px solid", "borderRadius": "5px"}}><i className="fa fa-shopping-cart"></i> Add to Cart</button>    
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
