import {cartTypes} from './cart.types';

const INITIAL_STATE = {
    hidden: true,
    addToCartCounter: 0,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case cartTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        
        case cartTypes.ADD_TO_CART: 
            return {
                ...state,
                addToCartCounter: state.addToCartCounter + 1
            }

        case cartTypes.ADD_ITEM: 
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }            
            
        default: 
        return state
    }
}

export default cartReducer;