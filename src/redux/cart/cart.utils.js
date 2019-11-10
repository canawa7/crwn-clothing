export const addItemToCartUtil = (cartItems_util, cartItemToAdd) => {
    const existingCartItem = cartItems_util.find(cart_item => 
        cart_item.id === cartItemToAdd.id
        //This will return the first item that the cartItems_util find with the same ID
        //If it's true, it will assign true to the existingCartItem or will be undefined
    );

    if(existingCartItem) {
        return cartItems_util.map(cart_item => 
            cart_item.id === cartItemToAdd.id ? {...cart_item, quantity: cart_item.quantity + 1} : cart_item      
        )
    }

    return [...cartItems_util, {...cartItemToAdd, quantity: 1}];
};