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

class CheckoutSummary extends Component {
	constructor(props, context) {
	    super(props, context);
	    this.state= {
			navigate: false,
			selectedUserAddress:{},
			cart:[],
			totalList:{},
	    }
		this.redirectToPayment =this.redirectToPayment.bind(this);
		this.submit = this.submit.bind(this);
	}

	componentWillMount() {
		if(this.props.match.params) {
			var addressID = this.props.match.params.addressId;
			var userID = this.props.match.params.userId;
			this.getUserAddressById(addressID, userID)
		}
		this.getCartList();
		this.orderSummaryList();
	}

	redirectToPayment() {
		console.log("this.selectedUserAddress--", this.state.selectedUserAddress);
		console.log("this.selectedUserAddress--", this.state.cart)

		this.setState({navigate:true});
	}

	getUserAddressById(addressId, userId) {
		this.props.actions.getUserAddressByIdAction(addressId, userId).then(response=>{
			if(response.status === 200) {
				this.setState({selectedUserAddress:response.data})
			} else {
				toastr.error(response.message);
			}
	  });
	}

	getCartList() {
		this.props.actions.getUserCartDataAction(localStorage.getItem("user_token")).then(response=>{
			if(response.status === 200) {
			  this.setState({cart: response.data});
			} else {
			  this.setState({cart: []});
			}
		});
	}

	orderSummaryList() {
		this.props.actions.getOrderSummaryData().then(response=>{
		  if(response.status === 200) {
				this.setState({totalList: response.data[0]});
		  } else {
				this.setState({totalList: []});
		  }
		});
	}

	submit() {
		this.props.actions.makePaymentAction().then(response=>{
			if(response.status === 200) {
				console.log("response----", response);
				window.location.href = response.data;

			} else {
				toastr.error(response.message);
			}
		});
  	}

	

  render() {
		const { navigate } = this.state
		if (navigate) {
			return <Redirect to='/checkout/payment' push={true} />
		}
		return (
		<div>
			<Header/>
				<div className="_uv" style={{"padding": "15px"}}>
					<div className="container">
						<div className="container-fluid no-pd" style={{"position": "relative", "margin": "auto -15px"}}>
						<div className="col-sm-7 noPdXs _ud">
						<div className="col-xs-12 no-pd hidden-xs" style={{"fontSize": "20px"}}>
							Checkout Summary<br/><br/>
						</div>
						<div className="_tO">
							<span className="pull-left hidden-xs">My Bag<span style={{"fontSize": "12px", "opacity": "0.5"}}><br/>({this.state.cart.length} item)</span></span>
							<span className="pull-right" style={{"fontFamily": "montserrat-bold", "fontSize": "16px"}}><i className="fa fa-inr" style={{"fontSize": "12px"}}></i> {this.state.totalList.TOTAL}</span>
						</div>
						{
							this.state.cart.length > 0 && 
							this.state.cart.map(cart=>
								<div>
									<div className="_tQ">
										<p className="col-xs-4 col-sm-3 col-md-2 no-padding hidden-xs _tW">
										<img src={require('../../assets/images/'+cart.productImage)} alt=""/>
										</p>
										<div className="col-xs-8 col-sm-9 col-md-10 hidden-xs no-padding _tX">
											<div>
												<p className="_tR">{cart.productName}</p>
												<div className="_tS">
													<i className="fa fa-inr" style={{"fontSize": "11px", "marginRight": "3px"}}></i>
													{cart.productPrice}
												</div>
												<div className="col-xs-12 no-padding _tT">
													<div className="_tU">
														<span style={{"opacity": "0.7", "fontSize": "11px"}}>Size: </span>
														<span style={{"fontSize": "13px"}}>{cart.productSize}</span>
													</div>
													<div className="_tU">
														<span style={{"opacity": "0.7", "fontSize": "11px"}}>Qty: </span>
														<span style={{"fontSize": "13px"}}>{cart.productQuantity}</span>
													</div>
												</div>
											</div>
										</div>
										<div className="col-xs-8 col-sm-9 col-md-10 hidden-xs _tY _tX">
											<div> 
												<div className="_tZ">
													<img src="https://images.bewakoof.com/web/delivery.png" style={{"width": "17px", "marginBottom": "-2px"}}/>
													Expected delivery: 23rd Aug
												</div>
											</div>
										</div>
									</div>
								</div>
							)
						}
					</div>
					<div id="cart-product-summary" className="_t7 col-xs-12 col-sm-5 _um">
						<div className="col-xs-12 no-pd _uc">
							
							<div id="cashbackSummary">
								<div style={{"fontFamily": "montserrat-bold", "margin": "0px auto"}}>
									Order Summary
								</div>
								<div className="_t5">Bag Total (Inclusive of all taxes)
									<span className="pull-right"><i className="fa fa-inr"></i>{this.state.totalList.TOTAL}</span>
								</div>
								<div className="_t5">Shipping Charges
									<span className="pull-right"><p> FREE </p></span><br/>
								</div>   
							</div>
							<hr style={{"height": "0px", "borderBottom": "1px solid rgb(238, 238, 238)"}}/>
							<div style={{"fontFamily": "montserrat-bold", "fontSize": "16px"}}>
								Payable Amount
								<span className="pull-right">
									<i className="fa fa-inr"></i>
									<span>{this.state.totalList.TOTAL}</span>
								</span>
							</div>
							<hr style={{"height": "0px", "borderBottom": "1px solid rgb(238, 238, 238)"}} /><br/>
							<div className="_uw">
								<button className="col-xs-12 _uk _uu" style={{"height": "50px", "fontSize": "15px", "letterSpacing": "1px"}} onClick={this.submit}>PROCEED TO PAYMENT &gt;</button>
							</div>
						</div>
						<div>
							<div className="_ua hidden-xs">
								<span style={{"float": "left", "width": "100%", "opacity": "0.7"}}>Delivery Address</span><br/>
								<div id="addressName" style={{"margin": "25px auto 5px"}}> 
									{this.state.selectedUserAddress.reciever_name} 
								</div>
								<div className="text-grayed-12">
									{this.state.selectedUserAddress.address} {this.state.selectedUserAddress.locality}<br/> 
									{this.state.selectedUserAddress.landmark}<br/> 
									{this.state.selectedUserAddress.city} {this.state.selectedUserAddress.pincode}<br/> {this.state.selectedUserAddress.state} {this.state.selectedUserAddress.country}<br/>
									<div>Mobile No. {this.state.selectedUserAddress.contact_number} </div>
								</div>
								<br/>
								<Link className="success" to="/checkout">Change</Link>
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

export default connect("",mapDispatchToProps)(CheckoutSummary);
