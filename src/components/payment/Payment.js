import React, { Component } from 'react';
import Header from '../header/Header.js';
import {Link} from 'react-router-dom';
import * as productAction from '../../actions/productAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import Footer from '../footer/Footer';
import lodash from 'lodash';

class Payment extends Component {
	constructor(props, context) {
          super(props, context);
          this.state={
            hideCardMenu:true,
            hideCodMenu:false,
            isActive : false,
          }
          this.myFunction = this.myFunction.bind(this);
          this.submit = this.submit.bind(this);
	}

	componentWillMount() {
		
      }
      
      myFunction(name) {
            console.log("name---", name);
            if(name == 'card') {
                  this.setState({hideCardMenu:true, hideCodMenu:false});
            } else if(name == 'cod') {
                  this.setState({hideCodMenu:true, hideCardMenu:false})
            }
      }

      submit() {
            this.props.actions.makePaymentAction().then(response=>{
                  if(response.status === 200) {
                    var userProfile = this.state.userProfile;
                    this.setState({userProfile:[response.data]})
                  } else {
                    toastr.error(response.message);
                  }
            });
      }

  	render() {
          	return (
      		<div>
      			<Header/>
            		<div className="_cd _cb no-pd _ce">
                              <div className="pull-left _cc col-xs-12 no-pd" style={{"marginBottom": "50px", "padding": "0px"}}>
                                    <div className="col-xs-12 no-padding hidden-xs" style={{"padding": "20px 15px", "fontSize": "20px", "borderBottom": "1px solid rgb(245, 245, 245)"}}>
                                          <span className="col-xs-8" style={{"padding": "10px"}}>Choose Payment Method</span>
                                          <span className="col-xs-4 hidden-xs" style={{"textAlign": "right"}}>
                                                <span style={{"fontSize": "12px"}}>Total Payable<br/>
                                                      <span style={{"fontSize": "12px"}}>
                                                            <i className="fa fa-inr" style={{"fontSize": "17px"}}></i>
                                                      </span>
                                                      <b style={{"fontFamily": "montserrat-bold", "fontSize": "20px"}}> 799</b>
                                                </span>
                                          </span>
                                    </div>
                                    <div className="hidden-xs">
                                          <div className="col-sm-5" style={{"minHeight":"400px", "borderRight": "1px solid rgb(238, 238, 238)", "margin": "0px auto 30px", "padding": "0px"}}>
                                                <div className="_cf">
                                                      <div className="_cg">
                                                            <div className={this.state.hideCardMenu == true ? 'paymentmenu':'_ch'} onClick={()=>this.myFunction("card")}>Credit/Debit Card 
                                                                  <i className="fas fa-angle-right" style={{"fontSize": "15px", "float": "right", "marginRight": "14px"}}></i>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="_cf">
                                                      <div className="_cg">
                                                            <div className={this.state.hideCodMenu == true ? 'paymentmenu':'_ch'} onClick={()=>this.myFunction("cod")}>Cash On Delivery
                                                                  <i className="fas fa-angle-right" style={{"fontSize": "15px", "float": "right", "marginRight": "14px"}}></i>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="hidden-xs">
                                          <div id="rightSectionCheckoutPayment">
                                                <div className="col-sm-7" style={{"padding": "0px"}}>
                                                      {
                                                            this.state.hideCodMenu == true &&
                                                            <div className="_b7 col-xs-12">
                                                                  <div className="col-xs-12 no-pd">
                                                                        <div id="cashbackSummary">
                                                                              <div style={{"fontFamily": "montserrat-bold", "margin": "0px auto"}}>Order Summary</div>
                                                                              <div className="_cu">
                                                                                    Bag Total (Inclusive of all taxes)
                                                                                    <span className="pull-right">
                                                                                          <i className="fa fa-inr" style={{"fontSize": "12px"}}></i> 799
                                                                                    </span>
                                                                              </div> 
                                                                              <div className="_cu">
                                                                                    Shipping Charges
                                                                                    <span className="pull-right">
                                                                                          <p>+ <i className="fa fa-inr" style={{"fontSize": "12px"}}></i> 25</p>
                                                                                    </span>
                                                                              </div>
                                                                        </div>
                                                                        <hr style={{"height": "0px", "borderBottom": "1px solid rgb(238, 238, 238)"}}/>
                                                                        <div style={{"fontFamily": "montserrat-bold", "fontSize": "16px", "fontWeight": "bold"}}>
                                                                              Payable Amount
                                                                              <span className="pull-right">
                                                                                    <i className="fa fa-inr _cM" style={{"fontSize": "12px"}}></i>
                                                                                    <span> 824</span>
                                                                              </span>
                                                                        </div>
                                                                        <hr style={{"height": "0px", "borderBottom": "1px solid rgb(238, 238, 238)"}}/>
                                                                  </div>
                                                            </div>
                                                      }        
                                                      {
                                                            this.state.hideCardMenu == true &&
                                                            <div className="_dk">
                                                                  <div className="col-xs-12 no-pd">
                                                                        <div className="form-group">
                                                                              <input type="text" placeholder="Card Number" required="" name="cardNumber" value="" className="form-control _dR"/>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-xs-12 no-pd">
                                                                        <div className="form-group">
                                                                              <input type="text" placeholder="Card Number" required="" name="cardNumber" value="" className="form-control _dR"/>
                                                                        </div>
                                                                  </div>
                                                                  <div className="row">
                                                                        <div className="col-xs-4 _dl">
                                                                              <div className="form-group">
                                                                                    <select id="cardMonth" className="form-control _dm _dR" name="expiryMonth" required="" style={{"-webkit-appearance": "none"}}>
                                                                                          <option disabled="">MM</option>
                                                                                          <option>01</option>
                                                                                          <option>02</option>
                                                                                          <option>03</option>
                                                                                          <option>04</option>
                                                                                          <option>05</option>
                                                                                          <option>06</option>
                                                                                          <option>07</option>
                                                                                          <option>08</option>
                                                                                          <option>09</option>
                                                                                          <option>10</option>
                                                                                          <option>11</option>
                                                                                          <option>12</option>
                                                                                    </select>
                                                                                    <div className="text-error" style={{"left": "0px"}}>Select a month</div>
                                                                              </div>
                                                                        </div>
                                                                        <div className="col-xs-4">
                                                                              <div className="form-group">
                                                                                    <select id="cardYear" className="form-control _dm _dR" name="expiryYear" required="" style={{"-webkit-appearance": "none"}}>
                                                                                          <option disabled="">YYYY</option>
                                                                                          <option>2015</option>
                                                                                          <option>2016</option>
                                                                                          <option>2017</option>
                                                                                          <option>2018</option>
                                                                                          <option>2019</option>
                                                                                          <option>2020</option>
                                                                                          <option>2021</option>
                                                                                          <option>2022</option>
                                                                                          <option>2023</option>
                                                                                          <option>2024</option>
                                                                                          <option>2025</option>
                                                                                          <option>2026</option>
                                                                                          <option>2027</option>
                                                                                          <option>2028</option>
                                                                                          <option>2029</option>
                                                                                          <option>2030</option>
                                                                                          <option>2031</option>
                                                                                          <option>2032</option>
                                                                                          <option>2033</option>
                                                                                          <option>2034</option>
                                                                                          <option>2035</option>
                                                                                          <option>2036</option>
                                                                                          <option>2037</option>
                                                                                          <option>2038</option>
                                                                                          <option>2039</option>
                                                                                          <option>2040</option>
                                                                                          <option>2041</option>
                                                                                          <option>2042</option>
                                                                                          <option>2043</option>
                                                                                          <option>2044</option>
                                                                                          <option>2045</option>
                                                                                          <option>2046</option>
                                                                                          <option>2047</option>
                                                                                          <option>2048</option>
                                                                                          <option>2049</option>
                                                                                          <option>2050</option>
                                                                                    </select>
                                                                                    <div className="text-error" style={{"left": "0px"}}>Select a year</div>
                                                                              </div>
                                                                        </div>
                                                                        <div className="col-xs-4 pull-right _dn">
                                                                              <div className="form-group">
                                                                                    <input type="password" placeholder="CVV" name="cvv" className="form-control _dR" minlength="3" maxlength="4" pattern="/^[0-9]{3,4}$/" required="" value=""/>
                                                                                    <div className="col-xs-12 no-pd text-right">
                                                                                          <div class="text-error" style={{"text-align": "left"}}>Cvv is Required<br/><br/></div>
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      }
                                                      
                                                </div>
                                                <button className="col-xs-7 _b6 _cw" onClick={this.submit}>CONFIRM ORDER</button>
                                                <div></div>
                                                <div></div>
                                                <div></div>
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

export default connect("",mapDispatchToProps)(Payment);
