import CartActionTypes from './cart.types';
import {addItemToCartUtil} from './cart.utils';

const INTIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INTIAL_STATE, action ) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
            
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                // cartItems: [...state.cartItems, action.payload]
                //Spreading in all the existing array values and add the new value at the end

                cartItems: addItemToCartUtil(state.cartItems, action.payload)
            }
        default:
            return state;
    }
};

export default cartReducer;


