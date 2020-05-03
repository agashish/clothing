import {cartTypes} from './cart.types';

export const cartToggleAction = () => ({
    type: cartTypes.TOGGLE_CART_HIDDEN
})

export const addToCartAction = () => ({
    type: cartTypes.ADD_TO_CART
})

export const addItem = item => ({
    type: cartTypes.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: cartTypes.REMOVE_ITEM,
    payload: item
})

export const clearItemFromCart = item => ({
    type: cartTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})
