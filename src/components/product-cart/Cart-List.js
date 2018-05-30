import React, {PropTypes} from 'react';
import CartListRow from './Cart-List-Row';

const CartList = ({cartData, deleteCart}) => {
  return (
    <table className="shopping-cart-table table">
      <thead>
        <tr>
          <th>Product</th>
          <th></th>
          <th className="text-center">Price</th>
          <th className="text-center">Quantity</th>
          <th className="text-center">Total</th>
          <th className="text-right"></th>
        </tr>
      </thead>
      <tbody>
      {cartData.map(cart =>
        <CartListRow key={cart.id} cart={cart} deleteCart={deleteCart}/>
      )}
      {cartData.length == 0 &&
        <tr><td className="valign-center" colSpan="6">Data not found</td> </tr>
      } 
      </tbody>
    </table>
  );
};

export default CartList;
