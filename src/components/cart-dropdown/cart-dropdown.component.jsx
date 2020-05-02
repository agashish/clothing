import React from 'react';

import {connect} from 'react-redux';

import './cart-dropdown.styles.scss';

import CartItem from './../cart-item/cart-item.component';

import CustomButton from './../custom-button/custom-button.component';

import {selectCartItem} from './../../redux/cart/cart.selectors';

import {withRouter} from 'react-router-dom'; 

const CartDropdown = ({cartItems, history}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                :
                <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => history.push('/checkout')}>Go To Checkout</CustomButton>
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItem(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));

