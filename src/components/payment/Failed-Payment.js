import React, { Component } from 'react';
import Header from '../header/Header.js';
import {Link} from 'react-router-dom';
import * as productAction from '../../actions/productAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import Footer from '../footer/Footer';
import lodash from 'lodash';

class FailedPayment extends Component {
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
            		<div className="row text-center">
                        <div className="col-md-12">
                            <h1>Transaction has been canceled by you.</h1>
                            <h1><Link to="/">Click here</Link> to go back Home.</h1>
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

export default connect("",mapDispatchToProps)(FailedPayment);
