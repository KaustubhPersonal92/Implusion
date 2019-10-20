import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productAction from '../../actions/productAction';
import Header from '../header/Header.js';
import CartList from './Cart-List';
import lodash from 'lodash';
import toastr from 'toastr';
import {Link} from 'react-router-dom';
import Footer from '../footer/Footer';
import { Redirect } from 'react-router';

class ProductCart extends Component {
  constructor(props, context) {
    super(props, context);
    this.state={
      cart:[],
      totalList:[],
      userProfile:[],
      userObject:{
        "firstName": '',
        "lastName": '',
        "email": '',
        "address": '',
        "city": '',
        "pincode": '',
        "contactNumber":''
      },
      auth:{
        "email":'',
        "password":''
      },
      userLoggedIn: false,
      navigate: false,
      hideCartIcon:true,
    }
    this.getUserProfile();
    this.deleteCart = this.deleteCart.bind(this);
    this.updateCart = this.updateCart.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
  }

  componentWillMount() {
    this.getCartList();
    this.orderSummaryList();
  }

  getCartList() {
    console.log("!lodash.isEmpty(localStorage.getItem", !lodash.isEmpty(localStorage.getItem("user_token")))
    if(!lodash.isEmpty(localStorage.getItem("user_token"))) {
      this.props.actions.getUserCartDataAction(localStorage.getItem("user_token")).then(response=>{
        if(response.status === 200) {
          this.setState({cart: response.data});
        } else {
          this.setState({cart: []});
        }
      });
    } else {
      this.props.actions.getCartData(localStorage.getItem("uniqueId")).then(response=>{
        if(response.status === 200) {
          this.setState({cart: response.data});
        } else {
          this.setState({cart: []});
        }
      });
    } 
  }

  orderSummaryList() {
    this.props.actions.getOrderSummaryData().then(response=>{
      if(response.status === 200) {
        this.setState({totalList: response.data});
      } else {
        this.setState({totalList: []});
      }
    });
  }

  deleteCart(shoppingId, productId) {
    this.props.actions.deleteCartData(shoppingId, productId).then(response=>{
      if(response.status === 200) {
        toastr.success("Product deleted successfully from the cart.");
        this.getCartList();
        this.orderSummaryList();
      } else {
        toastr.error("Unable to deleted product from the cart.")
      }
    });
  }

  updateCart(product) {
    var productQuantity = 1;
    product.productQuantity = 1 + product.productQuantity;
    this.props.actions.updateCartData(product).then(response=>{
      if(response.status === 200) {
        toastr.success(response.message);
        this.getCartList();
        this.orderSummaryList();
      } else {
        toastr.error(response.message)
      }
    });
  }

  decreaseQuantity(product) {
    var productQuantity = 1;
    product.productQuantity = product.productQuantity -1;
    this.props.actions.updateCartData(product).then(response=>{
      if(response.status === 200) {
        toastr.success(response.message);
        this.getCartList();
        this.orderSummaryList();
      } else {
        toastr.error(response.message)
      }
    });
  }

  getUserProfile() {
    if(!lodash.isEmpty(localStorage.getItem('user_token'))) {
      this.props.actions.getUserProfileAction().then(response=>{
        if(response.status === 200) {
          var userProfile = this.state.userProfile;
          this.setState({userProfile:response.data})
        } else {
          //toastr.error(response.message);
        }
      });
    }
  }

  render() {
    const { navigate } = this.state
    if (navigate) {
      return <Redirect to='/checkout/' push={true} />
    }
    return (
      <div>
        <Header
          user={this.state.userProfile}
          userLoggedIn = {this.state.userLoggedIn}
          hideCartIcon = {this.state.hideCartIcon}
        />

        <div className="section">
          <div className="container">
            {
              this.state.cart.length <= 0 && 
              <div className="_gP _gO" style={{"padding": "30px 0px 0px"}}>
                <img src="https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png" width="150px"/>
                <div>Nothing in the bag</div>
                <div>
                  <Link className="success" to="/" style={{"padding": "10px", "border": "2px solid", "borderRadius": "5px"}}>Continue Shopping</Link>
                </div>
              </div>
            }
            {
              this.state.cart.length > 0 && 
              <div className="row">
                <div className="col-md-12">
                  <div className="order-summary clearfix">
                    <div className="section-title">
                      <h3 className="title">Order Review</h3>
                    </div>
                    <CartList 
                      cartData = {this.state.cart}
                      deleteCart={this.deleteCart}
                      updateCart={this.updateCart}
                      decreaseQuantity={this.decreaseQuantity}
                      totalList={this.state.totalList}
                    />
                  </div>
                </div>
                {
                  this.state.cart.length > 0 && 
                  <div className="_2zqhDs _15r1AP">
                    <div className="_2CQPOE">
                      <Link to='/'>
                        <button className="_2AkmmA _14O7kc _7UHT_c">
                          <span>Continue Shopping</span>
                        </button>
                      </Link>
                      {
                        localStorage.getItem("user_token") && 
                        <Link to="/checkout">
                          <button className="_2AkmmA _14O7kc _7UHT_c">
                            <span> Place Order</span>
                          </button>
                        </Link>  
                      }
                      {
                        localStorage.getItem("user_token") === null && 
                        <a href="#" data-toggle="modal" data-target=".login-register-form">
                          <button className="_2AkmmA _14O7kc _7UHT_c">
                            <span> Place Order</span>
                          </button>
                        </a>  
                      }    
                    </div>
                  </div>
                }
              </div>
            }
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
    productCart: !lodash.isUndefined(state.ProductCart) ? state.ProductCart : state.ProductCart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productAction, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductCart);
