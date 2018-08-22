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
	      navigate: false,
		  userAddress:[],
		  userID:'',
		  addressID:''
	    };
	    this.selectUserAddress = this.selectUserAddress.bind(this);
	}

	componentWillMount() {
		this.getUserAddress();
	}

  	updateUserState(event) {
	    const field = event.target.name;
	    let user = this.state.userObject;
	    user[field] = event.target.value;
	    return this.setState({userObject: user});
  	}

  	selectUserAddress(addressId, userId) {
		this.setState({navigate:true, userID:userId, addressID:addressId});
		console.log("this0s0s", this.state)
  	}

  	getUserAddress() {
  		this.props.actions.getUserAddressAction().then(response=>{
	      if(response.status === 200) {
	      	this.setState({userAddress:response.data})
	      } else {
	        toastr.error(response.message);
	      }
	    });
  	}

  	render() {
  		const { navigate } = this.state
	    if (navigate) {
	      return <Redirect to={'/checkout/summary/'+ this.state.addressID + '/' + this.state.userID} push={true} />
	    }
    	return (
		<div>
			<Header/>
      		<div className="_q">
				<div className="_r col-xs-12">
					<div className="_R">
						<div className="col-xs-12 hidden-xs" style={{"fontSize": "20px"}}>
							Select Delivery Address
							<br/>
							<br/>
						</div>
						{
							this.state.userAddress.map(useraddress=>
							<div className="col-xs-12 col-sm-6 noPdXs">
								<div className="_t _u _z _C">
									<div className="_v col-xs-11">
										<h3 className="_G">
											<br/>
											<div className="_I">{useraddress.reciever_name}</div>
										</h3>
										<div className="text-grayed-12">
											<div style={{"margin": "5px auto 10px"}}>
												<div className="_K">
													{useraddress.address} {useraddress.locality}
													<br/>
												</div>
												<div>
													Pincode: {useraddress.pincode}
													<br/>
												</div>
												<div>
													Mobile No: {useraddress.contact_number}
												</div>
											</div>
										</div>
										<div>
											<span className="success" style={{"fontSize": "12px"}}>
												<Link to={'checkout/updateAddress/' + useraddress.id + '/' + useraddress.user_id}>Edit</Link>
											</span>
											<a className="_E" onClick={()=>this.selectUserAddress(useraddress.id, useraddress.user_id)}></a>
										</div>
									</div>
								</div>
								<br/>
								<br/>
							</div>
						)}
						<div className="col-xs-12 col-sm-6 noPdXs success text-center hidden-xs">
							<div className="_t _u _z _C" style={{"padding": "47px 0px", "fontFamily": "montserrat-regular"}}>
								<div className="_v col-xs-12">
									<Link to="/checkout/newAddress">
										<span style={{"fontSize": "60px", "lineHeight": "0"}}>+</span>
										<br/>ADD NEW ADDRESS
									</Link>
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
