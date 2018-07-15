import React, { Component } from 'react';
import Header from '../header/Header.js';
import {Link} from 'react-router-dom';
import * as productAction from '../../actions/productAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import Footer from '../footer/Footer';

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
  		var userProduct ={
  			"user": this.state.userObject,
  			"cart": this.state.cart
  		};
  		this.props.actions.addUser(userProduct).then(response=>{
  			if(response.status === 200) {
					const $ = window.$;
					$('#myModal').modal('show');
				} else {
					toastr.error(response.message);
				}
	    });
  	}

  	render() {
    return (
		<div>
			<Header/>
      <div className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="billing-details">
								<p>Already a customer ? <Link to='/login'>Login</Link></p>
								<div className="section-title">
									<h3 className="title">Billing Details</h3>
								</div>
								<div className="form-group">
									<input className="input" type="text" name="firstName" placeholder="First Name" onChange={this.updateUserState}/>
								</div>
								<div className="form-group">
									<input className="input" type="text" name="lastName" placeholder="Last Name" onChange={this.updateUserState}/>
								</div>
								<div className="form-group">
									<input className="input" type="email" name="email" placeholder="Email" onChange={this.updateUserState}/>
								</div>
								<div className="form-group">
									<input className="input" type="text" name="address" placeholder="Address" onChange={this.updateUserState}/>
								</div>
								<div className="form-group">
									<input className="input" type="text" name="city" placeholder="City" onChange={this.updateUserState}/>
								</div>
								<div className="form-group">
									<input className="input" type="text" name="country" placeholder="Country" onChange={this.updateUserState}/>
								</div>
								<div className="form-group">
									<input className="input" type="text" name="pincode" placeholder="Pin Code" onChange={this.updateUserState}/>
								</div>
								<div className="form-group">
									<input className="input" type="tel" name="contactNumber" placeholder="Contact Number" onChange={this.updateUserState}/>
								</div>
								<div className="form-group">
									<button onClick={this.addUser} className="btn btn-primary">Create Account</button>
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
