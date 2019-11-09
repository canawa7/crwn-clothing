import {UserActionTypes} from './user.types';

//We need the action trigger 
//a function that return object

//user_object can be userAuth, snapShot object, or null from App.js

export const setCurrentUser = user_object => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user_object
}); 

//This is the action that components are gonna use to trigget the userreducer