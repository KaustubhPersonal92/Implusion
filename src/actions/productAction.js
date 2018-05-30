import ProductApi from '../api/ProductApi';
import * as types from './actionTypes';

export function loadProductImagesSuccess(productImages) {
  return {type: types.LOAD_PRODUCT_IMAGE_SUCCESS, productImages};
}

export function loadCartSuccess(cart) {
  return {type: types.LOAD_CART_SUCCESS, cart};
}

export function loadProductImages() {
	return function (dispatch, getState) {
    return ProductApi.getProductImagesApi().then(response => {
      dispatch(loadProductImagesSuccess(response));
    }).catch(error => {
      console.log(error)
    });
  };
}

export function loadProductData(id) {
	return function (dispatch, getState) {
    return ProductApi.getProductDataApi(id).then(response => {
      return response;
    }).catch(error => {
      console.log(error)
    });
  };
}

export function addToCart(cartData) {
  return function (dispatch, getState) {
    return ProductApi.addToCartApi(cartData).then(response => {
      return response;
    }).catch(error => {
      console.log(error)
    });
  };
}

export function getCartData() {
  return function (dispatch, getState) {
    return ProductApi.getCartInfoApi().then(response => {
      dispatch(loadCartSuccess(response));
    }).catch(error => {
      console.log(error)
    });
  };
}

export function deleteCartData(shoppingId) {
  return function (dispatch, getState) {
    return ProductApi.deleteCartApi(shoppingId).then(response => {
      return response;
    }).catch(error => {
      console.log(error)
    });
  };
}
