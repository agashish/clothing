export const addToCartExisting = (cartItems, addItemToCart) => {
    const itemExists = cartItems.find(cartItem => cartItem.id === addItemToCart.id)

    // #### IF ITEM FOUND TRUE
    if(itemExists) {
        return cartItems.map(cartItem => 
            cartItem.id === addItemToCart.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    }

    // #### DOESN'T EXIST
    return [...cartItems, {...addItemToCart, quantity: 1}]
}

export const cartQuantity = (cartItems) => {
    return cartItems.reduce((accumulator, cartItem) => accumulator = accumulator + cartItem.quantity)
}

export const removeItemFromCart = (cartItems, item) => {
    return cartItems.filter(cartItem => cartItem.id !== item.id)    
}