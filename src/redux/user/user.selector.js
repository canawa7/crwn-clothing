import {createSelector} from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser], 
    (user_i) => user_i.currentUser
);
//The function that gets the return of the input selector in the array






// const selectUser = state => state.user;

// const selectCart = state => state.cart;

// export const selectCurrentUser = createSelector(
//     selectUser, 
//     selectCart,
//     (user_i, cart_i) => user_i.currentUser
// );




// const selectUser = state => state.user;

// const selectCart = state => state.cart;

// export const selectCurrentUser = createSelector(
//     [selectUser, selectCart],
//     (user_i, cart_i) => user_i.currentUser
// );