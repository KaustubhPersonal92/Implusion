import React from 'react';
import CartListRow from './Cart-List-Row';
import {Link} from 'react-router-dom';


const CartList = ({cartData, deleteCart, updateCart, decreaseQuantity, totalList}) => {
  return (
    <table className="shopping-cart-table table">
      <thead>
        <tr>
          <th>Product</th>
          <th></th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th className="text-right"></th>
        </tr>
      </thead>
      <tbody>
      {cartData.map(cart =>
        <CartListRow key={cart.id} cart={cart} deleteCart={deleteCart} updateCart={updateCart} decreaseQuantity={decreaseQuantity}/>
      )}
      {cartData.length === 0 &&
        <tr><td className="text-center" colSpan="6">No item in cart</td></tr>
      } 
      </tbody>
      {totalList.length > 0 && totalList.map(total=>
        <tfoot>
          <tr>
            <th className="empty" colspan="3"></th>
            <th>TOTAL</th>
            <th colspan="2" className="sub-total">{total.TOTAL}</th>
            <th className="empty" colspan="3"></th>
          </tr>
        </tfoot>
      )}
    </table>
  );
};

export default CartList;
