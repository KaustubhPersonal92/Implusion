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
import validateAddressInput from '../common/validations/addressValidation';


class AddNewAddress extends Component {
	constructor(props, context) {
	    super(props, context);
	    this.state= {
	    	navigate: false,
            userAddress:{
                  "pincode":'',
                  "address":'',
                  "locality":'',
                  "landmark":'',
                  "city":'',
                  "state":'',
                  "country":'',
                  "address_type":'',
                  "reciever_name":'',
                  "contact_number":'',
                  "alternate_contact_number":''
            },
            updateAddress: false,
            errors: {},
	    }
	    this.redirectToAddress =this.redirectToAddress.bind(this);
          this.getPincode =this.getPincode.bind(this);
          this.updateAddressState = this.updateAddressState.bind(this);
          this.addUserAddress = this.addUserAddress.bind(this);
          this.updateUserAddress = this.updateUserAddress.bind(this);
	}

	componentWillMount() {
            console.log("this.props.match.params--", this.props.match.params)
		if(!lodash.isEmpty(this.props.match.params)) {
			var addressID = this.props.match.params.addressId;
			var userID = this.props.match.params.userId;
			this.getUserAddressById(addressID, userID)
		}
	}

	redirectToAddress() {
		this.setState({navigate:true});
      }
      
      getUserAddressById(addressId, userId) {
		this.props.actions.getUserAddressByIdAction(addressId, userId).then(response=>{
			if(response.status === 200) {
                        this.setState({userAddress:response.data, updateAddress: true});
			} else {
				toastr.error(response.message);
			}
	  	});

	}

      getPincode() {
            this.props.actions.getPincodeAction(this.state.userAddress.pincode).then(response=>{
                  if(response.Status === 'Success') {
                        var address = this.state.userAddress;
                        address.city = response.PostOffice[0].District;
                        address.state = response.PostOffice[0].State;
                        address.country = response.PostOffice[0].Country;
                        this.setState({address: address});
                  } else {
                  }
            });
      }

      updateAddressState(event) {
            const field = event.target.name;
            let address = this.state.userAddress;
            address[field] = event.target.value;
            return this.setState({address: address});
      }

      isValidAddress() {
            const { errors, isValid } = validateAddressInput(this.state.userAddress);
            if (!isValid) {
            this.setState({ errors });
            }
            return isValid;
      }

      addUserAddress() {
            if(this.isValidAddress()) {
                  this.setState({ errors: {} });
                  this.props.actions.addUserAddressAction(this.state.userAddress).then(response=>{
                        if(response.status === 200) {
                              toastr.success(response.message);
                              this.setState({navigate:true})
                        } else {
                              toastr.error(response.message);
                              this.setState({navigate:false})
                        }
                  });
            }
      }

      setAddressType(type) {
          let userAddress = this.state.userAddress;
          userAddress.address_type= type;
          this.setState({userAddress: userAddress});
      }

      updateUserAddress() {
            if(this.isValidAddress()) {
                  this.setState({ errors: {} });
                  this.props.actions.updateUserAddressAction(this.state.userAddress).then(response=>{
                        if(response.status === 200) {
                              toastr.success(response.message);
                              this.setState({navigate:true})
                        } else {
                              toastr.error(response.message);
                              this.setState({navigate:false})
                        }
                  });
            }
      }

  	render() {
            const { navigate } = this.state
            if (navigate) {
                  return <Redirect to='/checkout' push={true} />
            }
    	return (
		<div>
			<Header/>
      		<div className="col-xs-12">
                        <div className="_q">
                              <div className="_r col-xs-12 no-pd">
                                    {
                                          this.state.updateAddress == true &&
                                          <div className="hidden-xs" style={{"fontSize": "20px"}}>
                                                My Addresses
                                                <br/>
                                          </div>
                                    }
                                    {
                                          this.state.updateAddress == false &&
                                          <div className="hidden-xs" style={{"fontSize": "20px"}}>
                                                Add Delivery Address
                                          <br/>
                                          </div>
                                    }
                                    <div style={{"float": "left", "width": "100%", "overflow-x": "hidden"}}>
                                          <div className="visible-xs _hz">
                                                Cancel
                                          </div>
                                          <div className="_hy">
                                                Delivery Info<hr/>
                                          </div>
                                          <div>
                                                <TextInputAddress
                                                      placeholder="Reciever's Name"
                                                      onChange={this.updateAddressState}
                                                      name="reciever_name"
                                                      value={this.state.userAddress.reciever_name}
                                                      error={this.state.errors.reciever_name}
                                                />
                                          </div>
                                          <div className="col-xs-12 col-sm-6 noPd">
                                                <TextInputAddress
                                                      placeholder="Phone No."
                                                      onChange={this.updateAddressState}
                                                      name="contact_number"
                                                      value={this.state.userAddress.contact_number}
                                                      error={this.state.errors.contact_number}
                                                />
                                          </div>
                                          <div className="col-xs-12 col-sm-6 noPdXs noPdRight">
                                                <TextInputAddress
                                                      placeholder="Alternate Phone No. (Optional)"
                                                      onChange={this.updateAddressState}
                                                      name="alternate_contact_number"
                                                      value={this.state.userAddress.alternate_contact_number}
                                                      error={this.state.errors.alternate_contact_number}
                                                />
                                          </div>
                                          <div className="_hy">
                                               Address<hr/>
                                          </div>
                                          <div className="col-xs-12 col-sm-6 no-pd">
                                                <TextInputAddress
                                                      placeholder="Pincode"
                                                      onChange={this.updateAddressState}
                                                      onBlur={this.getPincode}
                                                      name="pincode"
                                                      value={this.state.userAddress.pincode}
                                                      error={this.state.errors.pincode}
                                                />
                                          </div>
                                          <div>
                                                <TextInputAddress
                                                      placeholder="Address"
                                                      onChange={this.updateAddressState}
                                                      name="address"
                                                      value={this.state.userAddress.address}
                                                      error={this.state.errors.address}
                                                />
                                          </div>
                                          <div>
                                                <TextInputAddress
                                                      placeholder="Locality"
                                                      onChange={this.updateAddressState}
                                                      name="locality"
                                                      value={this.state.userAddress.locality}
                                                      error={this.state.errors.locality}
                                                />
                                          </div>
                                          <div>
                                                <TextInputAddress
                                                      placeholder="Landmark (Optional)"
                                                      onChange={this.updateAddressState}
                                                      name="landmark"
                                                      value={this.state.userAddress.landmark}
                                                />
                                          </div>
                                          <div className="col-xs-12 col-sm-6 noPd">
                                                <TextInputAddress
                                                      placeholder="City"
                                                      onChange={this.updateAddressState}
                                                      value={this.state.userAddress.city}
                                                      name="city"
                                                      error={this.state.errors.city}
                                                />
                                          </div>
                                          <div className="col-xs-12 col-sm-6 noPdXs noPdRight">
                                                <TextInputAddress
                                                      placeholder="State"
                                                      onChange={this.updateAddressState}
                                                      value={this.state.userAddress.state}
                                                      name="state"
                                                      error={this.state.errors.state}
                                                />
                                          </div>
                                          <div className="col-xs-12 col-sm-6 no-pd">
                                                <TextInputAddress
                                                      placeholder="Country"
                                                      onChange={this.updateAddressState}
                                                      value={this.state.userAddress.country}
                                                      name="country"
                                                      error={this.state.errors.country}
                                                />
                                          </div>
                                          <div className="form-group pull-left" style={{"width": "100%", "marginBottom": "20px"}}>
                                                <span className="_hv">This is my</span>
                                                <div className="_hu">
                                                      <div className="_hw">
                                                            <input type="radio" name="sub_type" id="radiotype0" value="home" onClick={()=>this.setAddressType('home')}/>
                                                            <label for="radiotype0" className={this.state.userAddress.address_type == 'home'? 'addressactive':' '}>home</label>
                                                      </div>
                                                      <div className="_hw">
                                                            <input type="radio" name="sub_type" id="radiotype1" value="office" onClick={()=>this.setAddressType('office')}/>
                                                            <label for="radiotype1" className={this.state.userAddress.address_type == 'office'? 'addressactive':' '}>office</label>
                                                      </div>
                                                      <div className="_hw">
                                                            <input type="radio" name="sub_type" id="radiotype2" value="other" onClick={()=>this.setAddressType('other')}/>
                                                            <label for="radiotype2" className={this.state.userAddress.address_type == 'other'? 'addressactive':' '}>other</label>
                                                      </div>
                                                </div>
                                                <div className="xgroup"></div>
                                          </div>
                                          <div className="col-xs-12 no-pd _ht">
                                          {
                                                this.state.updateAddress == true &&
                                                <button className="_hp pull-right" onClick={this.updateUserAddress}>SAVE ADDRESS</button>
                                          }
                                          {
                                                this.state.updateAddress == false &&
                                                <button className="_hp pull-right" onClick={this.addUserAddress}>SAVE ADDRESS</button>
                                          }
                                                <button className="hidden-xs _hq pull-right" type="button" onClick={this.redirectToAddress}>CANCEL</button>
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

export default connect("",mapDispatchToProps)(AddNewAddress);
