import React, { Component } from 'react';
import Header from '../header/Header.js';
import Menu from '../menu/Menu.js';
import {Link} from 'react-router-dom';

class Checkout extends Component {
  render() {
    return (
		<div>
			<Header/>
        	<Menu/>
        	<div id="breadcrumb">
				<div className="container">
					<ul className="breadcrumb">
						<li><Link to='/'>Home</Link></li>
						<li className="active">Checkout</li>
					</ul>
				</div>
			</div>
			<div className="section">
				<div className="container">
					<div className="row">
						<form id="checkout-form" className="clearfix">
							<div className="col-md-6">
								<div className="billing-details">
									<p>Already a customer ? <a>Login</a></p>
									<div className="section-title">
										<h3 className="title">Billing Details</h3>
									</div>
									<div className="form-group">
										<input className="input" type="text" name="first-name" placeholder="First Name"/>
									</div>
									<div className="form-group">
										<input className="input" type="text" name="last-name" placeholder="Last Name"/>
									</div>
									<div className="form-group">
										<input className="input" type="email" name="email" placeholder="Email"/>
									</div>
									<div className="form-group">
										<input className="input" type="text" name="address" placeholder="Address"/>
									</div>
									<div className="form-group">
										<input className="input" type="text" name="city" placeholder="City"/>
									</div>
									<div className="form-group">
										<input className="input" type="text" name="country" placeholder="Country"/>
									</div>
									<div className="form-group">
										<input className="input" type="text" name="zip-code" placeholder="ZIP Code"/>
									</div>
									<div className="form-group">
										<input className="input" type="tel" name="tel" placeholder="Telephone"/>
									</div>
									<div className="form-group">
										<div className="input-checkbox">
											<input type="checkbox" id="register"/>
											<label className="font-weak" for="register">Create Account?</label>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="shiping-methods">
									<div className="section-title">
										<h4 className="title">Shiping Methods</h4>
									</div>
									<div className="input-checkbox">
										<input type="radio" name="shipping" id="shipping-1" checked/>
										<label for="shipping-1">Free Shiping -  $0.00</label>
									</div>
									<div className="input-checkbox">
										<input type="radio" name="shipping" id="shipping-2"/>
										<label for="shipping-2">Standard - $4.00</label>
									</div>
								</div>
								<div className="payments-methods">
									<div className="section-title">
										<h4 className="title">Payments Methods</h4>
									</div>
									<div className="input-checkbox">
										<input type="radio" name="payments" id="payments-1" checked/>
										<label for="payments-1"> Cash on Delivery</label>
									</div>
									<div className="input-checkbox">
										<input type="radio" name="payments" id="payments-2"/>
										<label for="payments-2"> Net Banking</label>
									</div>
									<div className="input-checkbox">
										<input type="radio" name="payments" id="payments-3"/>
										<label for="payments-3"> Credit Card</label>
									</div>
									<div className="input-checkbox">
										<input type="radio" name="payments" id="payments-3"/>
										<label for="payments-3"> Debit Card</label>
									</div>
								</div>
							</div>
							<div className="col-md-12">
								<div className="order-summary clearfix">
									<div className="section-title">
										<h3 className="title">Order Review</h3>
									</div>
									<table className="shopping-cart-table table">
										<thead>
											<tr>
												<th>Product</th>
												<th></th>
												<th className="text-center">Price</th>
												<th className="text-center">Quantity</th>
												<th className="text-center">Total</th>
												<th className="text-right"></th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className="thumb">
													<img src="./img/thumb-product01.jpg" alt=""/>
												</td>
												<td className="details">
													<a>Product Name Goes Here</a>
													<ul>
														<li><span>Size: XL</span></li>
														<li><span>Color: Camelot</span></li>
													</ul>
												</td>
												<td className="price text-center">
													<strong>$32.50</strong><br/><del className="font-weak"><small>$40.00</small></del>
												</td>
												<td className="qty text-center">
													<input className="input" type="number" value="1"/>
												</td>
												<td className="total text-center">
													<strong className="primary-color">$32.50</strong>
												</td>
												<td className="text-right">
													<button className="main-btn icon-btn"><i className="fa fa-close"></i></button>
												</td>
											</tr>
											<tr>
												<td className="thumb">
													<img src="./img/thumb-product01.jpg" alt=""/>
												</td>
												<td className="details">
													<a>Product Name Goes Here</a>
													<ul>
														<li><span>Size: XL</span></li>
														<li><span>Color: Camelot</span></li>
													</ul>
												</td>
												<td className="price text-center">
													<strong>$32.50</strong>
												</td>
												<td className="qty text-center">
													<input className="input" type="number" value="1"/>
												</td>
												<td className="total text-center">
													<strong className="primary-color">$32.50</strong>
												</td>
												<td className="text-right">
													<button class="main-btn icon-btn"><i className="fa fa-close"></i></button>
												</td>
											</tr>
											<tr>
												<td className="thumb">
													<img src="./img/thumb-product01.jpg" alt=""/>
												</td>
												<td className="details">
													<a>Product Name Goes Here</a>
													<ul>
														<li><span>Size: XL</span></li>
														<li><span>Color: Camelot</span></li>
													</ul>
												</td>
												<td className="price text-center">
													<strong>$32.50</strong>
												</td>
												<td className="qty text-center">
													<input className="input" type="number" value="1"/>
												</td>
												<td className="total text-center">
													<strong className="primary-color">$32.50</strong>
												</td>
												<td className="text-right">
													<button className="main-btn icon-btn"><i class="fa fa-close"></i></button>
												</td>
											</tr>
										</tbody>
										<tfoot>
											<tr>
												<th className="empty" colspan="3"></th>
												<th>SUBTOTAL</th>
												<th colspan="2" className="sub-total">$97.50</th>
											</tr>
											<tr>
												<th className="empty" colspan="3"></th>
												<th>SHIPING</th>
												<td colspan="2">Free Shipping</td>
											</tr>
											<tr>
												<th className="empty" colspan="3"></th>
												<th>TOTAL</th>
												<th colspan="2" className="total">$97.50</th>
											</tr>
										</tfoot>
									</table>
									<div className="pull-right">
										<button className="primary-btn">Place Order</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
    );
  }
}

export default Checkout;
