import React from 'react';
import { ReactComponent as ShoppingIcon } from './../../assets/shop-bag.svg';

import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import {selectCartItemsCount} from './../../redux/cart/cart.selectors';
import {cartToggleAction} from './../../redux/cart/cart.actions';

const CartIcon = ({cartToggleAction, addToCartCounter}) => (
    <div className="cart-icon" onClick={() => cartToggleAction()}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{addToCartCounter}</span>
    </div>
)
  
const mapStateToProps = state => ({  
    addToCartCounter: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({ 
    cartToggleAction: () => dispatch(cartToggleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);