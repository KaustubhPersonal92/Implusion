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
      console.log("response---", response)
      return response;
    }).catch(error => {
      console.log(error)
    });
  };
}

export function getOrderSummaryData() {
  return function (dispatch, getState) {
    return ProductApi.getOrderSummaryApi().then(response => {
      console.log("response---", response)
      return response;
    }).catch(error => {
      console.log(error)
    });
  };
}

export function deleteCartData(shoppingId, productId) {
  return function (dispatch, getState) {
    return ProductApi.deleteCartApi(shoppingId, productId).then(response => {
      return response;
    }).catch(error => {
      console.log(error)
    });
  };
}

export function updateCartData(product) {
  return function (dispatch, getState) {
    return ProductApi.updateCartApi(product).then(response => {
      return response;
    }).catch(error => {
      console.log(error)
    });
  };
}

export function addUser(data) {
  return function (dispatch, getState) {
    return ProductApi.addUserApi(data).then(response => {
      return response;
    }).catch(error => {
      console.log(error)
    });
  };
}

