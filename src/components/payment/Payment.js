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
	}

	componentWillMount() {
		
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
                                                <div>
                                                      <div>
                                                            <div className="_cf">
                                                                  <h4 className="_cg">
                                                                        <div className=" _ch">Cash On Delivery 
                                                                              <i className="fas fa-angle-right" style={{"fontSize": "15px", "float": "right", "marginRight": "14px"}}></i>
                                                                        </div>
                                                                  </h4>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div>
                                          <div className="hidden-xs">
                                                <div id="rightSectionCheckoutPayment">
                                                      <div className="col-sm-7" style={{"padding": "0px"}}>        
                                                            <div className="_b7 col-xs-12">
                                                                  <div className="_cq visible-xs">Cash On Delivery</div>
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
                                                      </div>
                                                      <button className="col-xs-7 _b6 _cw" type="button">CONFIRM ORDER</button>
                                                      <button className="col-xs-7 _b6 _cw" type="button">CONFIRM ORDER</button>
                                                      <div></div>
                                                      <div></div>
                                                      <div></div>
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

export default connect("",mapDispatchToProps)(Payment);
