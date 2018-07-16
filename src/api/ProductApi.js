import axios from 'axios';

class ProductApi {
  static getProductImagesApi() {
    return new Promise((resolve, reject) => {
      axios.get("/api/product/getProductImages").then(function(response) {
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
      axios.get("/api/product/getProductInfo/"+id).then(function(response) {
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
      axios.post("/api/product/addToCart/", cartData).then(function(response) {
        if(response.data.status === 200) {
          resolve(response.data);
        }
        else {
          resolve(response);
        }
      })
    });
  }

  static getCartInfoApi() {
    return new Promise((resolve, reject) => {
      axios.get("/api/product/getCartDetail/").then(function(response) {
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
    return new Promise((resolve, reject) => {
      axios.get("/api/product/getCartSummary/").then(function(response) {
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
      axios.post("/api/product/deleteCart/",cartObject).then(function(response) {
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
      axios.put("/api/product/updateCart/"+product.shoppingCart_id, product).then(function(response) {
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
      axios.post("/api/product/addUser/", data).then(function(response) {
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
