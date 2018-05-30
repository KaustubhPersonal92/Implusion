import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productAction from '../../actions/productAction';
import { Redirect } from 'react-router';
import Header from '../header/Header.js';
import Menu from '../menu/Menu.js';
import CartList from './Cart-List';
import lodash from 'lodash';

class ProductCart extends Component {
  constructor(props, context) {
    super(props, context);
    this.state= {
      cartData: []
    };
    this.deleteCart = this.deleteCart.bind(this);
  }

  componentWillMount() {
    this.props.actions.getCartData();
  }

  deleteCart(id) {
    this.props.actions.deleteCartData(id).then(response=>{
      console.log("response----", response)
    });
  }


  render() {
    return (
      <div>
        <Header/>
        <Menu/>
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="order-summary clearfix">
                  <div className="section-title">
                    <h3 className="title">Order Review</h3>
                  </div>
                  <CartList 
                    cartData = {this.props.productCart}
                    deleteCart={this.deleteCart}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
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
