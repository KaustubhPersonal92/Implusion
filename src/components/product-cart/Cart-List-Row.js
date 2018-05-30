import React, {PropTypes} from 'react';

const CartListRow = ({cart, deleteCart}) => {
  console.log("cart---", cart)
  return (
    <tr className="grey">
      <td className="thumb">
        <img src={require('../../assets/images/'+cart.productImage)} alt=""/>
      </td>
      <td className="details">
        <a>{cart.productName}</a>
        <ul>
          <li><span>Size: XL</span></li>
          <li><span>Color: Camelot</span></li>
        </ul>
      </td>
      <td className="price text-center">
        <strong>{cart.productPrice}</strong><br/>
      </td>
      <td className="qty text-center">
        <input className="input" type="number" value="1"/>
      </td>
      <td className="total text-center">
        <strong className="primary-color">{cart.productPrice}</strong>
      </td>
      <td className="text-right">
        <a className="main-btn icon-btn" onClick={()=>deleteCart(cart.shoppingCartId)}><i className="fa fa-close"></i></a>
      </td>
    </tr>
  );
};

export default CartListRow;
