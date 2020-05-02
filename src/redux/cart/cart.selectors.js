import {createSelector} from 'reselect';

// Input selectors - Does not use createSelector
// Output Selector - It will use Input & CreateSelector

const selectCart = state => state.cart;

export const selectCartItem = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItem],
    (cartItems) => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
)
