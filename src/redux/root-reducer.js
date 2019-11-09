//This root-reducer is the actual base reducer object that represents all of the state of our application
//End up being the actual code that combines all of our other states together
//All of the reducer that we're going to write is going to this root-reducer file

import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});