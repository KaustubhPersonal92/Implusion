import React from 'react';

const CartListRow = ({cart, deleteCart, updateCart, decreaseQuantity}) => {
  let disabledDecreaseQuantity = true;
  let disabledDecreaseQuantityButton = '';
  if(cart.productQuantity > 1) {
    disabledDecreaseQuantity = false;
    disabledDecreaseQuantityButton = <button className="wNrY5O" disabled={disabledDecreaseQuantity} onClick={()=>decreaseQuantity(cart)}> – </button>
  } else{
    disabledDecreaseQuantity = true;
    disabledDecreaseQuantityButton = <button className="wNrY5O" disabled={disabledDecreaseQuantity}> – </button>
  }
  return (
    <tr className="grey">
      <td className="thumb">
        <img src={require('../../assets/images/'+cart.productImage)} alt=""/>
      </td>
      <td className="details">
        <a>{cart.productName}</a>
        <ul>
          <li><span>Size: {cart.productSize}</span></li>
          <li><span>Color: Camelot</span></li>
        </ul>
      </td>
      <td className="price">
        <strong>{cart.productPrice}</strong><br/>
      </td>
      <td>
        <div className="_3cto0P">
          <div className="_3RkJty">
            <div className="_3md1dr">
              {disabledDecreaseQuantityButton}
              <div className="_2zH4zg">
                <input type="text" value={cart.productQuantity} className="_2csFM9"/>
              </div>
              <button className="wNrY5O" onClick={()=>updateCart(cart)}> + </button>
            </div>
          </div>
        </div>
      </td>
      <td className="total">
        <strong className="primary-color">{cart.productPrice}</strong>
      </td>
      <td className="text-right">
        <a className="main-btn icon-btn" onClick={()=>deleteCart(cart.shoppingCart_id, cart.product_id)}><i className="fa fa-close"></i></a>
      </td>
    </tr>
    
  );
};

export default CartListRow;
