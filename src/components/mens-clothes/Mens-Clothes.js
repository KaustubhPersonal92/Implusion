import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productAction from '../../actions/productAction';
import ProductImages from './Product-Images';
import { Redirect } from 'react-router';

var category = "men";
class MensClothes extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      navigate: false,
      productId: {}
    }
    this.redirectProduct = this.redirectProduct.bind(this);
    this.showMenMenu = this.showMenMenu.bind(this);
    this.showWomenMenu = this.showWomenMenu.bind(this);
  }

  componentWillMount() {
    category = "men";
    this.props.actions.loadProductImages(category);
  }

  redirectProduct(id) {
    this.setState({ navigate: true, productId: id });
  }

  showMenMenu() {
    category = "men";
    this.props.actions.loadProductImages(category);
  }

  showWomenMenu() {
    category = "women";
    this.props.actions.loadProductImages(category);
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
                <ul className="nav nav-tabs">
                  <li className={category == 'men'? 'category_active':' '}>
                    <a data-toggle="tab" href="#menu1" onClick={this.showMenMenu}>Men</a></li>
                  <li className={category == 'women'? 'category_active':' '}>
                    <a data-toggle="tab" href="#menu2" onClick={this.showWomenMenu}>Women</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="tab-pane fade in active">
              <ProductImages
                productImage={this.props.ProductImages}
                redirectProduct={this.redirectProduct}
              />
            </div>
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
