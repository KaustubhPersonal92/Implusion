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
import TextInputAddress from '../common/TextInputAddress';
import TextInput from '../common/TextInput';

class UserProfile extends Component {
	constructor(props, context) {
    super(props, context);
    this.state= {
    	navigate: false,
      updateAddress: false,
      errors: {},
      userObject:{
        "firstName": '',
        "lastName": '',
        "email": '',
        "password": '',
        "number":'',
        "gender":'',
      },
      changePasswordState:{
        "currentPassword":'',
        "newPassword":'',
        "confirmPassword":''
      },
    }
    this.redirectToAddress =this.redirectToAddress.bind(this);
	}

	componentWillMount() {
    console.log("this...", this.props.userProfile)
		
	}

	redirectToAddress() {
		this.setState({navigate:true});
	}

  updateUserPasswordState=(event)=> {
    const field = event.target.name;
    const user = this.state.changePasswordState;
    user[field] = event.target.value;
    return this.setState({changePasswordState: user});
  }

  updateProfileState=(event)=> {
    const field = event.target.name;
    const user = this.state.userObject;
    user[field] = event.target.value;
    return this.setState({userObject: user});
  }

  onSubmitPassword =()=>{
    this.state.changePasswordState.email = this.props.userProfile.email;
    this.props.actions.changePasswordAction(this.state.changePasswordState).then(response=>{
      if(response.status === 200) {
        const $ = window.$;
        $('.change-password-form').modal('hide');
        toastr.success(response.message);
      } else {
        toastr.error(response.message);
      }
    });
  }

  setAddressType = (type)=> {
    let userObject = this.state.userObject;
    userObject.gender= type;
    this.setState({userObject: userObject});
  }


  onSubmitProfile =()=>{
    this.props.actions.updateProfileAction(this.state.userObject).then(response=>{
      if(response.status === 200) {
        const $ = window.$;
        $('.change-password-form').modal('hide');
        toastr.success(response.message);
      } else {
        toastr.error(response.message);
      }
    });
  }

  render() {
    const { navigate } = this.state
    this.state.userObject = this.props.userProfile
    if (navigate) {
      return <Redirect to='/checkout' push={true} />
    }
    return (
  		<div>
        <Header/>
          <div className="container _io">
            <div className="_e7 hidden-xs">
              <Link className="active" aria-current="true" to="/myaccount">
                <span><i className="glyphicon glyphicon-chevron-left"></i>Back to My Account</span>
              </Link>
            </div>
            <div className="_jo hidden-xs">
              <div className="_jp">
                <div>My Profile</div>
                <hr/>
              </div>
            </div>
            <div className="clearfix">
              <div className="_sb">
                <div className="col-xs-12 col-sm-6 noPd">
                  <TextInputAddress
                    onChange={this.updateProfileState}
                    name="firstName"
                    value={this.state.userObject.firstName}
                    labelValue="First Name"
                    type="text"
                  />
                </div>
                <div className="col-xs-12 col-sm-6 noPdXs noPdRight">
                  <TextInputAddress
                    onChange={this.updateProfileState}
                    name="lastName"
                    value={this.state.userObject.lastName}
                    labelValue="Last Name"
                    type="text"
                  />
                </div>
                <div>
                  <TextInputAddress
                    onChange={this.updateProfileState}
                    name="reciever_name"
                    value={this.state.userObject.email}
                    labelValue="Email Id"
                    type="text"
                    disabled="true"
                  />
                </div>
                <div className="col-xs-12 col-sm-6 noPd">
                  <div className="xgroup">
                    <TextInputAddress
                      onChange={this.updateProfileState}
                      name="password"
                      value={this.state.userObject.password}
                      labelValue="Password"
                      type="password"
                    />
                    <a className="inputHelp" aria-current="false" data-toggle="modal" data-target=".change-password-form">Change Password</a>
                  </div>
                </div>
                <div style={{"float": "left","width": "100%"}}>
                  <div className="col-xs-12 col-sm-6 noPd">
                    <TextInputAddress
                      onChange={this.updateProfileState}
                      name="contactNumber"
                      value={this.state.userObject.contactNumber}
                      labelValue="Phone Number"
                      type="text"
                      maxLength="10"
                    />
                  </div>
                </div>
                <div style={{"float": "left", "width": "100%", "marginBottom": "60px"}}>
                  <span className="_r8">Gender</span>
                  <div className="_r7">
                    <div className="_r9">
                      <input type="radio" name="gender" id="male" value="Male" onClick={()=>this.setAddressType('Male')}/>
                      <label htmlFor="male" className={this.state.userObject.gender == 'Male'? 'addressactive':' '}>Male</label>
                    </div>
                    <div className="_r9">
                      <input type="radio" name="gender" id="female" value="Female" onClick={()=>this.setAddressType('Female')}/>
                      <label htmlFor="female" className={this.state.userObject.gender == 'Female'? 'addressactive':' '}>Female</label>
                    </div>
                  </div>
                </div>
                <button type="submit" className="_sa" onClick={this.onSubmitProfile}>SAVE CHANGES</button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
            <div className="modal fade change-password-form" role="dialog">
              <div className="modal-dialog" style={{"maxWidth": "400px"}}>
                <div className="modal-content">
                  <div className="modal-header">
                    <div className="_hN">
                      <div className="_hO">
                        Change Password
                        <div className="_hP">kmkaustubh11@gmail.com</div>
                      </div>
                      <a data-dismiss="modal" style={{"position": "absolute","top": "0px","right": "0px","padding": "35px"}}>
                        <span className="glyphicon glyphicon-remove"></span>
                      </a>
                      <div className="_hQ" style={{"width":"100%"}}>
                        <div>
                          <TextInputAddress
                            onChange={this.updateUserPasswordState}
                            name="currentPassword"
                            value={this.state.changePasswordState.currentPassword}
                            placeholder="Enter your Current Password"
                            type="password"
                          />
                        </div>
                        <div>
                          <TextInputAddress
                            onChange={this.updateUserPasswordState}
                            name="newPassword"
                            value={this.state.changePasswordState.newPassword}
                            placeholder="Enter your New Password"
                            type="password"
                          />
                        </div>
                        <div>
                          <TextInputAddress
                            onChange={this.updateUserPasswordState}
                            name="confirmPassword"
                            value={this.state.changePasswordState.confirmPassword}
                            placeholder="Confirm New Password"
                            type="password"
                          />
                        </div>
                        <button type="submit" className="_hR" onClick={this.onSubmitPassword}>UPDATE PASSWORD</button>
                      </div>

                    </div>
                    
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

function mapStateToProps(state, ownProps) {
  return {
    userProfile: !lodash.isUndefined(state.UserProfile) ? state.UserProfile : state.UserProfile
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productAction, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(UserProfile);
