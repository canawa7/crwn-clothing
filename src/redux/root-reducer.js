//This root-reducer is the actual base reducer object that represents all of the state of our application
//End up being the actual code that combines all of our other states together
//All of the reducer that we're going to write is going to this root-reducer file

import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
//The root-reducer is the code that combine all of the reducer together for the application

import shopReducer from './shop/shop.reducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//Import in the type of storage we want
//we imported the actual local storage object of the window browser
//We can also import sessionStorage library from different directory

//Define new persist config
//This is just tje JSON object that represents the possible configuraiton that we want for redux-persist to use
const persistConfig ={
    key: 'root', //at what point we inside of our reducer object we want to start storing everything 
    storage,  //This will way the storage key will go to whatever storage object from the redux-persist
    whitelist: ['cart'] //Contains string names of any of the reducer that we want to store
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

//We have to two reducer, user and cart
//but since the user is handled by the firebase, we dont need to touch it with redux-persist


export default persistReducer( persistConfig, rootReducer);
//This will return the modified version of our rootReducer with the persist ability