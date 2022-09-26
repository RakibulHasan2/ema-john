import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Cart.css'
const Cart = (props) => {
   const carts = props.carts;
//    console.log(carts)
//    const total = carts.reduce((total, prd) => total + prd.price, 0)
   let total = 0;
   for( let i=0 ; i<carts.length ; i++)
   {
    const price = carts[i];
    total = total + price.price;
   }
   const shippingCharge = 10;
   const tax = Math.round(total / 10);
   const grandTotal = total + shippingCharge + tax;
    return (
        <div className='cart-info'>
            <h2>Order Summary</h2>
            <p>Selected Items : {carts.length}</p>
            <p>Total Price : {total}$</p>
            <p>Total Shipping Charge : {shippingCharge}$</p>
            <p>Tax : {tax}$</p>
            <p className='grand-total'>Grand Total : {grandTotal}$</p>
            <div className='process-btn'>
            <button className='clear-cart-btn btnText'>
                <p>Clear Cart</p>
                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
            </button>
            <button className='review-btn btnText'>
                <p>Review Order</p>
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
            </div>
        </div>
    );
};
export default Cart;