import {createSelector} from 'reselect';

//Input selector, which doesnt use createSelector
//It is a function that get the whole state and returns a slice of it
//Selecting onlythe 'cart' object from the whole reducer state
const selectCart = state => state.cart;
//Input selector is only a selector that returns a piece of the state

//Output Selector, which uses createSelector
//Takes two arguments: 1. Colection/array 2. Function that will return the value you want out of this selector
export const selectCartItems = createSelector(
    [selectCart],
    (cart_i) => cart_i.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);

//When using the selectCartItemsCount, the sequence goes like this:
//selectCartItemsCount -> [selectCartItems] -> selectCartItems -> [selectCart] -> selectCart -> state.cart -> cart_i.cartItems -> cartItems -> then itemCount in cart-icon.component 

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
      cartItems.reduce(
        (accumalatedQuantity, cartItem) =>
          accumalatedQuantity + cartItem.quantity * cartItem.price,
        0
      )
  );