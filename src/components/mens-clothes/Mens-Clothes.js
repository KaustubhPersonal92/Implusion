import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productAction from '../../actions/productAction';
import ProductImages from './Product-Images';
import { Redirect } from 'react-router';

class MensClothes extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      navigate: false,
      productId:{}
    }
    this.redirectProduct = this.redirectProduct.bind(this);
  }

  componentWillMount() {
    this.props.actions.loadProductImages();
  }
  
  redirectProduct(id) {
    this.setState({navigate: true, productId: id});
  }
  render() {
    const { navigate } = this.state
    if (navigate) {
      return <Redirect to={'/product/' + this.state.productId} push={true} />
    }
    return (
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2 className="title">Latest Products</h2>
              </div>
            </div>
            <ProductImages
              productImage={this.props.ProductImages}
              redirectProduct={this.redirectProduct}
            />
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  console.log("state---image", state)
  return {
    ProductImages: state.ProductImages,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MensClothes);
