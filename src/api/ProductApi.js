import axios from 'axios';
import * as Data from '../interceptor';

class ProductApi {
  static getProductImagesApi() {
    return new Promise((resolve, reject) => {
      axios.get("http://localhost:8080/api/product/getProductImages").then(function(response) {
        if(response.data.status === 200) {
          resolve(response.data.data);
        }
        else {
          resolve(response);
        }
      })
    });
  }

  static getProductDataApi(id) {
    return new Promise((resolve, reject) => {
      axios.get("http://localhost:8080/api/product/getProductInfo/"+id).then(function(response) {
        if(response.data.status === 200) {
          resolve(response.data);
        }
        else {
          resolve(response);
        }
      })
    });
  }

  static addToCartApi(cartData) {
    return new Promise((resolve, reject) => {
      axios.post("http://localhost:8080/api/product/addToCart/", cartData).then(function(response) {
        if(response.data.status === 200) {
          resolve(response.data);
        }
        else {
          resolve(response);
        }
      })
    });
  }

  static getCartInfoApi(uniqueID) {
    return new Promise((resolve, reject) => {
      axios.get("http://localhost:8080/api/product/getCartDetail/"+uniqueID).then(function(response) {
        if(response.data.status === 200) {
          resolve(response.data);
        }
        else {
          resolve(response.data);
        }
      })
    });
  }

  static getOrderSummaryApi() {
    // var userToken = "Bearer "+ localStorage.getItem("user_token");
    // var config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': userToken
    //   }
    // };
    return new Promise((resolve, reject) => {
      axios.get("http://localhost:8080/api/product/getCartSummary/").then(function(response) {
        if(response.data.status === 200) {
          resolve(response.data);
        }
        else {
          resolve(response.data);
        }
      })
    });
  }

  

  static deleteCartApi(shoppingId, productId) {
    var cartObject = {
      "shoppingId": shoppingId,
      "productId": productId
    };
    return new Promise((resolve, reject) => {
      axios.post("http://localhost:8080/api/product/deleteCart/",cartObject).then(function(response) {
        if(response.data.status === 200) {
          resolve(response.data);
        }
        else {
          resolve(response);
        }
      })
    });
  }

  static updateCartApi(product) {
    return new Promise((resolve, reject) => {
      axios.put("http://localhost:8080/api/product/updateCart/"+product.shoppingCart_id, product).then(function(response) {
        if(response.data.status === 200) {
          resolve(response.data);
        }
        else {
          resolve(response);
        }
      })
    });
  }

  static addUserApi(data) {
    return new Promise((resolve, reject) => {
      axios.post("http://localhost:8080/api/user/addUser/", data).then(function(response) {
        if(response.data.status === 200) {
          resolve(response.data);
        }
        else {
          resolve(response.data);
        }
      })
    });
  }

  static getUserProfileApi() {
    var userToken = "Bearer "+ localStorage.getItem("user_token");
    var config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': userToken
      }
    };
    return new Promise((resolve, reject) => {
      axios.get("http://localhost:8080/api/user/getUserProfile/", config).then(function(response) {
        if(response.data.status === 200) {
          resolve(response.data);
        }
        else {
          resolve(response.data);
        }
      })
    });
  }

  static userAuthenticationApi(data) {
    return new Promise((resolve, reject) => {
      axios.post("http://localhost:8080/api/user/authenication/", data).then(function(response) {
        if(response.data.status === 200) {
          resolve(response.data);
        }
        else {
          resolve(response.data);
        }
      })
    });
  }

  static getUserAddressApi() {
    var userToken = "Bearer "+ localStorage.getItem("user_token");
    var config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': userToken
      }
    };
    return new Promise((resolve, reject) => {
      axios.get("http://localhost:8080/api/user/address/", config).then(function(response) {
        if(response.data.status === 200) {
          resolve(response.data);
        }
        else {
          resolve(response.data);
        }
      })
    });
  }

  static getPincodeApi(pincode) {
    var userToken = "Bearer "+ localStorage.getItem("user_token");
    var config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': userToken
      }
    };
    return new Promise((resolve, reject) => {
      axios.get("http://localhost:8080/api/pincode/"+pincode).then(function(response) {
        if(response.data.status === 200) {
          resolve(response);
        }
        else {
          resolve(response.data);
        }
      })
    });
  }

  static addUserAddressApi(data) {
    var userToken = "Bearer "+ localStorage.getItem("user_token");
    var config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': userToken
      }
    };
    return new Promise((resolve, reject) => {
      axios.post("http://localhost:8080/api/user/address/", data, config).then(function(response) {
        if(response.data.status === 200) {
          resolve(response.data);
        }
        else {
          resolve(response.data);
        }
      })
    });
  }

  static getUserAddressByIdActionApi(addresId, userId) {
    var userToken = "Bearer "+ localStorage.getItem("user_token");
    var config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': userToken
      }
    };
    return new Promise((resolve, reject) => {
      axios.get("http://localhost:8080/api/user/address/"+addresId + "/" +userId, config).then(function(response) {
        if(response.data.status === 200) {
          resolve(response.data);
        }
        else {
          resolve(response.data);
        }
      })
    });
  }

  static updateUserAddressApi(data) {
    console.log("data---", data)
    var userToken = "Bearer "+ localStorage.getItem("user_token");
    var config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': userToken
      }
    };
    return new Promise((resolve, reject) => {
      axios.put("http://localhost:8080/api/user/address/"+data.id, data, config).then(function(response) {
        if(response.data.status === 200) {
          resolve(response.data);
        }
        else {
          resolve(response.data);
        }
      })
    });
  }

  static updateUserCartApi(uniqueId) {
    var data = {
      "uniqueId":uniqueId
    };

    var userToken = "Bearer "+ localStorage.getItem("user_token");
    var config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': userToken
      }
    };
    return new Promise((resolve, reject) => {
      axios.put("http://localhost:8080/api/product/updateUserCart/", data, config).then(function(response) {
        if(response.data.status === 200) {
          resolve(response.data);
        }
        else {
          resolve(response.data);
        }
      })
    });
  }

  static getUserCartDataApi(userToken) {
    var config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+ userToken
      }
    };
    return new Promise((resolve, reject) => {
      axios.get("http://localhost:8080/api/product/getUserCartData/", config).then(function(response) {
        if(response.data.status === 200) {
          resolve(response.data);
        }
        else {
          resolve(response.data);
        }
      })
    });
  }

  static makePaymentApi() {
    return new Promise((resolve, reject) => {
      axios.post("http://localhost:8080/makePayment").then(function(response) {
        if(response.data.status === 200) {
          resolve(response.data);
        }
        else {
          resolve(response.data);
        }
      })
    });
  }

  static changePasswordApi(data) {
    var userToken = "Bearer "+ localStorage.getItem("user_token");
    
    var config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+ userToken
      }
    };

    return new Promise((resolve, reject) => {
      axios.post("http://localhost:8080/api/user/changePassword", data, config).then(function(response) {
        if(response.data.status === 200) {
          resolve(response.data);
        }
        else {
          resolve(response.data);
        }
      })
    });
  }

  static updateProfileApi(data) {
    var userToken = "Bearer "+ localStorage.getItem("user_token");
    
    var config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+ userToken
      }
    };

    return new Promise((resolve, reject) => {
      axios.put("http://localhost:8080/api/user/updateProfile/"+data.id, data, config).then(function(response) {
        if(response.data.status === 200) {
          resolve(response.data);
        }
        else {
          resolve(response.data);
        }
      })
    });
  }
}

export default ProductApi;
