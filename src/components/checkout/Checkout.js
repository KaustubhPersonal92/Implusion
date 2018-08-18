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

class Checkout extends Component {
	constructor(props, context) {
	    super(props, context);
	    this.state={
	      userObject:{
	        "firstName": '',
	        "lastName": '',
	        "email": '',
	        "address": '',
	        "city": '',
	        "pincode": '',
	        "contactNumber":''
	      },
	      navigate: false,
	    };
	    this.addUser = this.addUser.bind(this);
	    this.updateUserState = this.updateUserState.bind(this);
	    this.selectUserAddress = this.selectUserAddress.bind(this);
	    this.getCartList();
	}

	componentWillMount() {
		
	}

  	updateUserState(event) {
	    const field = event.target.name;
	    let user = this.state.userObject;
	    user[field] = event.target.value;
	    return this.setState({userObject: user});
  	}
  	getCartList() {
	    this.props.actions.getCartData().then(response=>{
	      if(response.status === 200) {
	        this.setState({cart: response.data});
	      } else {
	        this.setState({cart: []});
	      }
	    });
  	}

  	addUser() {
  		if(this.state.userObject.firstName != '') {
  			var userProduct ={
	  			"user": this.state.userObject,
	  			"cart": this.state.cart
  			};
	  		this.props.actions.addUser(userProduct).then(response=>{
	  			if(response.status === 200) {
	  				
					// const $ = window.$;
					// $('#myModal').modal('show');
				} else {
					toastr.error(response.message);
				}
		    });
  		} else {
  			toastr.error("Please fill the field");
  		}
  	}

  	selectUserAddress() {
  		this.setState({navigate:true});
  	}

  	render() {
  		const { navigate } = this.state
	    if (navigate) {
	      return <Redirect to='/checkout/summary/' push={true} />
	    }
    	return (
		<div>
			<Header/>
      		<div className="section">
				<div className="container">
					<div className="_n9 col-xs-12">
						<div className="_oy">
							<div className="col-xs-12 hidden-xs" style={{"fontSize": "20px"}}>
								Select Delivery Address
								<br/>
								<br/>
							</div>
							<div className="col-xs-12 col-sm-6 noPdXs">
								<div className="_oa _ob _og _oj" style={{"padding": "10px 0px"}}>
									<div className="_oc col-xs-11">
										<h3 className="_on">
											<br/>
											<div className="_op">Kaustubh</div>
										</h3>
										<div className="text-grayed-12">
											<div style={{"margin": "5px auto 10px"}}>
												<div className="_or">
													411, SQUATS Fitness Pvt Ltd 4th floor,Platinum Square
													Next to Hayatt hotel,Above Sriniwas veg restaurant.
													<br/>
												</div>
												<div>
													Pincode:
													<br/>
												</div>
												<div>
													Pincode:
												</div>
											</div>
										</div>
										<div>
											<span className="success" style={{"fontSize": "12px"}}>
												Edit
											</span>
											<a className="_ol" onClick={this.selectUserAddress}></a>
										</div>
									</div>
								</div>
								<br/>
								<br/>
							</div>
							<div className="col-xs-12 col-sm-6 noPdXs success text-center hidden-xs">
								<div className="_oa _ob _og _oj" style={{"padding": "45px 0px", "fontFamily": "montserrat-regular"}}>
									<div className="_oc col-xs-12">
										<span style={{"fontSize": "60px", "lineHeight": "0"}}>+</span>
										<br/>ADD NEW ADDRESS
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="myModal" className="modal fade">
				<div className="modal-dialog modal-confirm">
					<div className="modal-content">
						<div className="modal-header">
							<div className="icon-box">
								<i className="material-icons">&#xE876;</i>
							</div>				
							<h4 className="modal-title">Awesome!</h4>	
						</div>
						<div className="modal-body">
							<p className="text-center">Your order has been confirmed. Please check your email for order confirmation.</p>
						</div>
						<div className="modal-footer">
							<Link className="btn btn-success btn-block" to="/">OK</Link>
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

export default connect("",mapDispatchToProps)(Checkout);
