import React from 'react';
import {connect} from 'react-redux';
import {clearItemFromCart} from './../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem, removeItemFromCart}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (    
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="Product Image" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <span>&#10094;</span>
                {quantity}
            <span>&#10095;</span>
        </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={() => removeItemFromCart(cartItem)}>&#10005;</div>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    removeItemFromCart: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);