import React, { Component } from 'react';
import Header from '../header/Header.js';
import {Link} from 'react-router-dom';
import * as productAction from '../../actions/productAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import Footer from '../footer/Footer';
import lodash from 'lodash';
import { Redirect } from 'react-router';

class CustomerOrders extends Component {
	constructor(props, context) {
    super(props, context);
    this.state= {
    	navigate: false,
    }
    this.redirectToAddress =this.redirectToAddress.bind(this);
	}

	componentWillMount() {
		
	}

	redirectToAddress() {
		this.setState({navigate:true});
	}

  render() {
    const { navigate } = this.state
    if (navigate) {
      return <Redirect to='/checkout' push={true} />
    }
    return (
		  <div>
        <Header/>
      		<div className="container _io">
            <div className="_e7 hidden-xs">
              <Link className="active" aria-current="true" to="/myaccount">
                <span><i className="glyphicon glyphicon-chevron-left"></i>Back to My Account</span>
              </Link>
            </div>
            <div className="_jo hidden-xs">
              <div className="_jp">
                <div>My Orders</div>
                <hr/>
              </div>
            </div>
          </div>
          <div>
            <div className="container _ed">
              <div className="_cO">
                <div className="_cP">
                  <div className="_cS _cQ">
                    <div className="_cT pull-left">
                      <div className="_cR">ORDER DATE</div>
                      <div className="_cU">5 Aug, 2018</div>
                    </div>
                    <div className="_cT pull-right">
                      <div className="_cR">ORDER ID</div>
                      <div className="_cU">14406665</div>
                    </div>
                  </div>
                  <div className="_cV" style={{"marginTop": "0px"}}>
                    <a href="/p/vendetta-shadows-half-sleeve-t-shirt-for-men?src=myorder">
                      <img className="_cW" src="https://images.bewakoof.com/t320/vendetta-shadows-half-sleeve-t-shirt-men-s-printed-t-shirts-189257-1531822539.jpg?tr=q-50"/>
                    </a>
                    <div className="_cX">
                      <a className="_cZ" href="/p/vendetta-shadows-half-sleeve-t-shirt-for-men?src=myorder">Vendetta Shadows Half Sleeve T-Shirt</a>
                      <div className="_cZ">
                        <i className="fa fa-inr" style={{"fontSize": "12px"}}></i> 299
                        <span className="_cY">|</span>
                        <span className="_c0">Size:</span>M
                      </div>
                      <div className="_c1">
                        <div className="_cS _c2 _c4">
                          <i className="icon_bullet"></i>
                          delivered
                        </div>
                      </div>
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


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productAction, dispatch)
  };
}

export default connect("",mapDispatchToProps)(CustomerOrders);
