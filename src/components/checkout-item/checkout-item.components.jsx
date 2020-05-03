import React from 'react';
import {connect} from 'react-redux';
import {clearItemFromCart, addItem, removeItem} from './../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem, removeItemFromCart, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (    
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="Product Image" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <span onClick={() => removeItem(cartItem)}>&#10094;</span>
                {quantity}
            <span onClick={() => addItem(cartItem)}>&#10095;</span>
        </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={() => removeItemFromCart(cartItem)}>&#10005;</div>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    removeItemFromCart: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);