import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItem, selectCartTotal} from './../../redux/cart/cart.selectors';
import CheckoutItem from './../../components/checkout-item/checkout-item.components';

import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total}) => {
    console.log(cartItems)
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
    
            {
                cartItems.length ?
                    cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
                :
                <span>Your cart is empty</span>
            }
    
            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);