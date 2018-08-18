import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import toastr from 'toastr';
import * as productAction from '../../actions/productAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import lodash from 'lodash';

class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.state={
      userProfile:[],
      auth:{
        "email":'',
        "password":''
      },
      userLoggedIn: false,
    }
    this.updateUserState = this.updateUserState.bind(this);
    this.updateAuthState = this.updateAuthState.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    this.getUserProfile();
  }

  updateUserState(event) {
    const field = event.target.name;
    let user = this.state.userObject;
    user[field] = event.target.value;
    return this.setState({userObject: user});
  }

  updateAuthState(event) {
    const field = event.target.name;
    let user = this.state.auth;
    user[field] = event.target.value;
    return this.setState({user: user});
  }

  login() {
    this.props.actions.authentication(this.state.auth).then(response=>{
      if(response.status === 200) {
        const $ = window.$;
        $('.login-register-form').modal('hide');
        localStorage.setItem("user_token", response.data);
        this.getUserProfile();
      } else {
        toastr.error(response.message);
        this.setState({userProfile:[]})
      }
    });
  }

  getUserProfile() {
    this.props.actions.getUserProfileAction().then(response=>{
      if(response.status === 200) {
        var userProfile = this.state.userProfile;
        this.setState({userProfile:[response.data]})
      } else {
        toastr.error(response.message);
      }
    });
  }

  logout() {
    localStorage.removeItem("user_token");
    this.setState({userProfile:[]});
  }

  render() {
    const that = this.state
    return (
      <header className="CGBNf7 _1tYwJP">
        <div className="_1tz-RS">
          <div className="Y5-ZPI">  
            <div className="AsXM8z">
              <div className="row _3XGGG6">
                <Link className="_2OJxl5" to="/">
                  <img width="110" src={require("../../assets/images/implus-logo.jpg")} alt="Implusion" title="Implusion"/>
                </Link>
                <div className="_1NLCcM">
                  <form className="_1WMLwI header-form-search" action="/search" method="GET">
                    <div className="row">
                      <div className="col-11-12">
                        <div className="O8ZS_U">
                          <input type="text" value="" className="LM6RPg" title="Search for products, brands and more" name="q" placeholder="Search for products, brands and more"/>
                        </div>
                      </div>
                      <div className="col-1-12">
                        <button className="vh79eN" type="submit">
                          <svg width="20px" height="20px" viewBox="0 0 17 18" className="" xmlns="http://www.w3.org/2000/svg"><g fill="#2874F1" fillRule="evenodd"><path className="_2BhAHa" d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path><path className="_2BhAHa" d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path></g></svg>
                        </button>
                      </div>
                      <input type="hidden" name="otracker" value="start"/>
                      <input type="hidden" name="as-show" value="off"/>
                      <input type="hidden" name="as" value="off"/>
                    </div>
                    <ul className="col-11-12 _1PBbw8"></ul>
                  </form>
                </div>
                <div className="_1Wr4v5">
                  {
                    that.userProfile.length <= 0 &&
                    <div className="JvUE0p">
                      <div className="_1jJkOg">
                        <a href="#" data-toggle="modal" data-target=".login-register-form">Login &amp; Signup</a>
                      </div>
                    </div>
                  }
                  {
                    that.userProfile.length > 0 &&
                    <ul className="_1jJkOg">
                      <li className="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">My Account <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                          <li><a>< i className="far fa-user"></i> My Profile</a></li>
                          <li><a><i className="fas fa-folder"></i> Orders</a></li>
                          <li><a onClick={this.logout}><i className="glyphicon glyphicon-off"></i> Logout</a></li>
                        </ul>
                      </li>
                    </ul>
                  }
                  {
                    this.props.hideCartIcon == false &&
                    <Link className="_3NFO0d JvUE0p" to="/viewcart">
                      <div className="_1jJkOg">
                        <svg className="_1-mlum" width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>
                        <span>Cart</span>
                      </div>
                    </Link>  
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="_2hlh_L"></div>
        <div className="zi6sUf _3Ed3Ub">
          <ul className="_114Zhd">
            <li className="Wbt_B2">
              <Link title="Electronics" className="_1QZ6fC" to="/">
                <span>Home | Product </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="row">
            <div className="modal fade login-register-form" role="dialog">
              <div className="modal-dialog modal-sm">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">
                      <span className="glyphicon glyphicon-remove"></span>
                    </button>
                    <ul className="nav nav-tabs">
                      <li className="active">
                        <a data-toggle="tab" href="#login-form"> Login</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#registration-form"> Register</a>
                      </li>
                    </ul>
                  </div>
                  <div className="modal-body">
                    <div className="tab-content">
                      <div id="login-form" className="tab-pane fade in active">
                        <div className="form-group">
                          <input type="email" className="form-control" onChange={this.updateAuthState} placeholder="Enter email" name="email"/>
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control" onChange={this.updateAuthState} placeholder="Enter password" name="password"/>
                        </div>
                        <button  className="btn btn-default" onClick={this.login}>Login</button>
                      </div>
                      <div id="registration-form" className="tab-pane fade">
                        <div className="form-group">
                          <input className="input" type="text" name="firstName" placeholder="First Name" onChange={this.updateUserState} required/>
                        </div>
                        <div className="form-group">
                          <input className="input" type="text" name="lastName" placeholder="Last Name" onChange={this.updateUserState} required/>
                        </div>
                        <div className="form-group">
                          <input className="input" type="email" name="email" placeholder="Email" onChange={this.updateUserState} required/>
                        </div>
                        <div className="form-group">
                          <input className="input" type="text" name="address" placeholder="Address" onChange={this.updateUserState} required/>
                        </div>
                        <div className="form-group">
                          <input className="input" type="text" name="city" placeholder="City" onChange={this.updateUserState} required/>
                        </div>
                        <div className="form-group">
                          <input className="input" type="text" name="country" placeholder="Country" onChange={this.updateUserState} required/>
                        </div>
                        <div className="form-group">
                          <input className="input" type="text" name="pincode" placeholder="Pin Code" onChange={this.updateUserState} required/>
                        </div>
                        <div className="form-group">
                          <input className="input" type="tel" name="contactNumber" placeholder="Contact Number" onChange={this.updateUserState} required/>
                        </div>
                        <button onClick={this.addUser} className="btn btn-default">Register</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
    productCart: !lodash.isUndefined(state.ProductCart) ? state.ProductCart : state.ProductCart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productAction, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
