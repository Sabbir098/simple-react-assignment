import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props.cart)
    // const {cart} = props
    // let total = 0;
    // for(const actor of cart){
    //    total = total + actor.networth;
    // }
    

    return (
        <div>
            <h2>Total Added: {props.cart.length}</h2>
            <h3>Total Cost:{}</h3>
        </div>
    );
};

export default Cart;
