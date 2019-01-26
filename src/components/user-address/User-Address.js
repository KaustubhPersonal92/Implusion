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

class UserAddress extends Component {
	constructor(props, context) {
	    super(props, context);
	    this.state={
	      navigate: false,
		  userAddress:[],
		  userID:'',
		  addressID:'',
		  hideMenuIcon:true
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
			<Header
				menuCartIcon = {this.state.hideMenuIcon}
			/>
			<div className="container _io">
	            <div className="_e7 hidden-xs">
	              <Link className="active" aria-current="true" to="/myaccount">
	                <span><i className="glyphicon glyphicon-chevron-left"></i>Back to My Account</span>
	              </Link>
	            </div>
	            <div className="_jo hidden-xs">
	              <div className="_jp">
	                <div>My Addresses</div>
	                <hr/>
	              </div>
	            </div>
          	</div>
          	<div className="container _dG _dH">
          		{
					this.state.userAddress.map(useraddress=>
					<div className="col-xs-12 col-sm-6 col-md-4 _dL">
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
									<span style={{"font-family": "montserrat-thin"}}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
									<span className="success" style={{"fontSize": "12px"}}>
										<a  onClick={()=>this.selectUserAddress(useraddress.id, useraddress.user_id)}>Remove</a>
									</span>
								</div>
							</div>
						</div>
						<br/>
						<br/>
					</div>
				)}
				<div className="col-xs-12 col-sm-6 col-md-4 _dL">
					<div className="_t _u _z _C" style={{"height": "175px","display": "flex","align-items": "center","justify-content": "center","text-align": "center","font-family": "montserrat-regular","font-size": "12px","color": "rgb(81, 204, 204)"}}>
						<div className="_v col-xs-12">
							<Link to="/checkout/newAddress">
								<span style={{"fontSize": "60px", "lineHeight": "0"}}>+</span>
								<br/>ADD NEW ADDRESS
							</Link>
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

export default connect("",mapDispatchToProps)(UserAddress);
