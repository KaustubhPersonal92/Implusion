import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import toastr from 'toastr';
import * as productAction from '../../actions/productAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import lodash from 'lodash';
import { Redirect } from 'react-router';
import TextInput from '../common/TextInput';
import validateInput from '../common/validations/addUserValidation';
import validateLoginInput from '../common/validations/loginValidation';

class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.state={
      userProfile:[],
      filterList:[],
      auth:{
        "email":'',
        "password":''
      },
      userObject:{
        "firstName": '',
        "lastName": '',
        "email": '',
        "password": '',
        "number":'',
        "gender":''
      },
      errors: {},
      userLoggedIn: false,
      navigate: false,
      isActive : false,
    }
    this.updateUserState = this.updateUserState.bind(this);
    this.updateAuthState = this.updateAuthState.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.addUser = this.addUser.bind(this);
    this.getFilterProducts = this.getFilterProducts.bind(this);
    this.outFocus = this.outFocus.bind(this);
    this.getUserProfile();
  }

  isValidAuth() {
    const { errors, isValid } = validateLoginInput(this.state.auth);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  isValidUser() {
    const { errors, isValid } = validateInput(this.state.userObject);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
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
    if(this.isValidAuth()) {
      this.setState({ errors: {} });
      this.props.actions.authentication(this.state.auth).then(response=>{
        if(response.status === 200) {
          const $ = window.$;
          $('.login-register-form').modal('hide');
          localStorage.setItem("user_token", response.data.token);
          localStorage.setItem("user_id", response.data.id);
          this.getUserProfile();
          this.updateUserIdInCart();
        } else {
          toastr.error(response.message);
          this.setState({userProfile:[]})
        }
      });
    }
  }

  getUserProfile() {
    if(!lodash.isEmpty(localStorage.getItem('user_token'))) {
      this.props.actions.getUserProfileAction().then(response=>{
        if(response.status === 200) {
          var userProfile = this.state.userProfile;
          this.setState({userProfile:[response.data]})
        } else {
          
        }
      });
    } else {

    }
    
  }

  logout() {
    localStorage.removeItem("user_token");
    localStorage.removeItem("uniqueId");
    this.setState({navigate: true});
    window.location.reload();
  }

  setGender(gender) {
    let user = this.state.userObject;
    user.gender= gender;
    this.setState({user: user});
  }

  updateUserIdInCart() {
    var uniqueId = localStorage.getItem("uniqueId");
    this.props.actions.updateUserCartAction(uniqueId).then(response=>{
      if(response.status === 200) {
        var userProfile = this.state.userProfile;
        this.setState({userProfile:[response.data]})
      } else {
        toastr.error(response.message);
      }
    });
  }


  addUser() {
    if(this.isValidUser()) {
      this.setState({ errors: {} });
      var userProduct ={
        "user": this.state.userObject
      };
      this.props.actions.addUser(userProduct).then(response=>{
        if(response.status === 200) {
          toastr.success(response.message);
          const $ = window.$;
          $('.login-register-form').modal('hide');
          localStorage.setItem("user_token", response.data);
          this.getUserProfile();
          this.updateUserIdInCart();
        } else {
          toastr.error(response.message);
        }
      });
    } else {
    }
  }

  getFilterProducts(event) {
    console.log("tets--", event.target.value);
    this.props.actions.getFilterProducts(event.target.value).then(response=>{
      console.log("response recieved---", response)
      if(response.status == 200) {
        this.setState({filterList:response.data})
      } else {
        this.setState({filterList:[]})
      }
    });
  }

  outFocus() {
    this.setState({filterList:[]})
  }

  render() {
    const that = this.state;
    const { navigate } = this.state;
    console.log("that----", that.userProfile)
    if (navigate) {
      return <Redirect to='/' push={true} />
    }
    return (
      <header className="CGBNf7 _1tYwJP">
        <div className="_1tz-RS">
          <div className="Y5-ZPI">  
            <div className="AsXM8z">
              <div className="row _3XGGG6">
                <Link className="_2OJxl5" to="/">
                  <img width="110" src={require("../../assets/images/header.png")} alt="Implusion" title="Implusion"/>
                </Link>
                <div className="_1NLCcM">
                  <div className="_1WMLwI header-form-search">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="O8ZS_U">
                          <input 
                            type="text" 
                            className="LM6RPg" 
                            title="Search for products, brands and more" 
                            name="q" 
                            placeholder="Search for products, brands and more"
                            onChange={this.getFilterProducts}
                            onFocus={this.outFocus}
                          />
                        </div>
                        {
                          this.state.filterList.length > 0  &&
                          <ul className="serachList">
                          {
                            this.state.filterList.map(data=>
                            <li>
                              <Link to={'/product/' + data.id}>
                              { data.Name }
                              </Link>
                            </li>
                          )}
                        </ul>
                        }
                      </div>
                    </div>
                  </div>
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
                      <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                          <span className="glyphicon glyphicon-user"></span>
                          <span> {that.userProfile[0].firstName}</span>
                          <span className="glyphicon glyphicon-chevron-down account_subclass"></span>
                        </a>
                        <ul className="dropdown-menu">
                          <li><Link to="/myaccount">< i className="far fa-user"></i> My Profile</Link></li>
                          <li><Link to="/myaccount/orders"><i className="fas fa-folder"></i> My Orders</Link></li>
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
        {
          this.props.menuCartIcon == false && 
          <div className="zi6sUf _3Ed3Ub">
            <ul className="_114Zhd">
              <li className="Wbt_B2">
                <Link title="Electronics" className="_1QZ6fC" to="/">
                  <span>Home | Product </span>
                </Link>
              </li>
            </ul>
          </div>
        }
        <div className="container">
          <div className="row">
            <div className="modal fade login-register-form" role="dialog">
              <div className="modal-dialog" style={{"maxWidth": "400px"}}>
                <div className="modal-content" style={{"padding": "20px"}}>
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
                        <div className="row">
                          <div className="col-md-12">
                            <TextInput
                              name="email"
                              value={this.state.auth.email}
                              onChange={this.updateAuthState}
                              error={this.state.errors.email}
                              type="text"
                              placeholder="Enter email"
                            /> 
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <TextInput
                              name="password"
                              value={this.state.auth.password}
                              onChange={this.updateAuthState}
                              error={this.state.errors.password}
                              type="password"
                              placeholder="Enter password"
                            /> 
                          </div>
                        </div>
                        <button  className="_lP" onClick={this.login}>Login</button>
                      </div>
                      <div id="registration-form" className="tab-pane fade">
                        <div className="row">
                          <div className="col-md-6">
                            <TextInput
                              name="firstName"
                              value={this.state.userObject.firstName}
                              onChange={this.updateUserState}
                              error={this.state.errors.firstName}
                              type="text"
                              placeholder="First Name"
                            /> 
                          </div>
                          <div className="col-md-6">
                            <TextInput
                              name="lastName"
                              value={this.state.userObject.lastName}
                              onChange={this.updateUserState}
                              error={this.state.errors.lastName}
                              type="text"
                              placeholder="Last Name"
                            /> 
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <TextInput
                              name="email"
                              value={this.state.userObject.email}
                              onChange={this.updateUserState}
                              error={this.state.errors.email}
                              type="email"
                              placeholder="Email"
                            /> 
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <TextInput
                              name="password"
                              value={this.state.userObject.password}
                              onChange={this.updateUserState}
                              error={this.state.errors.password}
                              type="password"
                              placeholder="Password"
                            /> 
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <TextInput
                              name="number"
                              value={this.state.userObject.number}
                              onChange={this.updateUserState}
                              error={this.state.errors.number}
                              type="text"
                              placeholder="Mobile"
                              maxLength="10"
                            /> 
                          </div>
                        </div>
                        <div style={{"margin": "0px auto 50px"}}>
                          <span style={{"float": "left", "paddingTop": "5px", "color": "rgb(24, 24, 24)", "opacity": "0.5"}}>Gender</span>
                          <span className={this.state.userObject.gender == 'Female'? 'active genderBtn':'genderBtn'} onClick={()=>this.setGender('Female')}>Female</span>
                          <span className={this.state.userObject.gender == 'Male'? 'active genderBtn':'genderBtn'} onClick={()=>this.setGender('Male')}>Male</span>
                        </div>
                        <button onClick={this.addUser} className="_lP">Sign Up</button>
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
    actions: bindActionCreators(productAction, dispatch),

  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
