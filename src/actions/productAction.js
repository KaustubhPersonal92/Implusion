import ProductApi from '../api/ProductApi';
import * as types from './actionTypes';

export function loadProductImagesSuccess(productImages) {
  return {type: types.LOAD_PRODUCT_IMAGE_SUCCESS, productImages};
}

export function loadCartSuccess(cart) {
  return {type: types.LOAD_CART_SUCCESS, cart};
}

export function loadUserSuccess(userProfile) {
  return {type: types.LOAD_USER_PROFILE_SUCCESS, userProfile};
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

export function getCartData(uniqueID) {
  return function (dispatch, getState) {
    return ProductApi.getCartInfoApi(uniqueID).then(response => {
      return response;
    }).catch(error => {
      console.log(error)
    });
  };
}

export function getOrderSummaryData() {
  return function (dispatch, getState) {
    return ProductApi.getOrderSummaryApi().then(response => {
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

export function getUserProfileAction() {
  return function (dispatch, getState) {
    return ProductApi.getUserProfileApi().then(response => {
      dispatch(loadUserSuccess(response));
      return response;
    }).catch(error => {
      console.log(error)
    });
  };
}

export function authentication(data) {
  return function (dispatch, getState) {
    return ProductApi.userAuthenticationApi(data).then(response => {
      return response;
    }).catch(error => {
      console.log(error)
    });
  };
}

export function getUserAddressAction() {
  return function (dispatch, getState) {
    return ProductApi.getUserAddressApi().then(response => {
      return response;
    }).catch(error => {
      console.log(error)
    });
  };
}

export function getPincodeAction(pincode) {
  return function (dispatch, getState) {
    return ProductApi.getPincodeApi(pincode).then(response => {
      return response;
    }).catch(error => {
      console.log(error)
    });
  };
}

export function addUserAddressAction(data) {
  return function (dispatch, getState) {
    return ProductApi.addUserAddressApi(data).then(response => {
      return response;
    }).catch(error => {
      console.log(error)
    });
  };
}

export function getUserAddressByIdAction(addressId, userId) {
  return function (dispatch, getState) {
    return ProductApi.getUserAddressByIdActionApi(addressId, userId).then(response => {
      return response;
    }).catch(error => {
      console.log(error)
    });
  };
}

export function updateUserAddressAction(data) {
  return function (dispatch, getState) {
    return ProductApi.updateUserAddressApi(data).then(response => {
      return response;
    }).catch(error => {
      console.log(error)
    });
  };
}

export function updateUserCartAction(uniqueID) {
  return function (dispatch, getState) {
    return ProductApi.updateUserCartApi(uniqueID).then(response => {
      return response;
    }).catch(error => {
      console.log(error)
    });
  };
}

export function getUserCartDataAction(userToken) {
  return function (dispatch, getState) {
    return ProductApi.getUserCartDataApi(userToken).then(response => {
      return response;
    }).catch(error => {
      console.log(error)
    });
  };
}

export function makePaymentAction() {
  return function (dispatch, getState) {
    return ProductApi.makePaymentApi().then(response => {
      return response;
    }).catch(error => {
      console.log(error)
    });
  };
}

export function changePasswordAction(data) {
  return function (dispatch, getState) {
    return ProductApi.changePasswordApi(data).then(response => {
      return response;
    }).catch(error => {
      console.log(error)
    });
  };
}

export function updateProfileAction(data) {
  return function (dispatch, getState) {
    return ProductApi.updateProfileApi(data).then(response => {
      return response;
    }).catch(error => {
      console.log(error)
    });
  };
}