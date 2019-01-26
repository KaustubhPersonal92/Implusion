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

class Account extends Component {
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
        		<div className="containerHeight">
              <div className="container _d7">
                <div className="_e7 hidden-xs">
                  <div className="_e8">
                    <div>My Account</div>
                    <hr/>
                  </div>
                </div>
              </div>
              <div>
                <div className="_v4">
                  <div className="container _v3">
                    <div className="clearfix _v5">
                      <div className="_v6">
                        <Link to="/myaccount/orders">
                          <span className="_v7">My Orders</span>
                          <i className="glyphicon glyphicon-chevron-right"></i>
                          <span className="_v9">View, modify and track orders</span>
                        </Link>
                      </div>
                      <div className="_v6">
                        <Link to="/myaccount/address">
                          <span className="_v7">My Addresses</span>
                          <i className="glyphicon glyphicon-chevron-right"></i>
                          <span className="_v9">Edit, add or remove addresses</span>
                        </Link>
                      </div>
                      <div className="_v6">
                        <Link to="/myaccount/profile">
                          <span className="_v7">My Profile</span>
                          <i className="glyphicon glyphicon-chevron-right"></i>
                          <span className="_v9">Edit personal info, change password</span>
                        </Link>
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

export default connect("",mapDispatchToProps)(Account);
