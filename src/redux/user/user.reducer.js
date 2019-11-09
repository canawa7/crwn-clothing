//A reducer is a function that gets two property, lastState, initialState, and receive an action

//Action only has two propery, type and payload
// {
//     type: 
//     payload:
// }

const INITIAL_STATE = {
    currentUser : null
}


const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return{
                ...state,
                currentUser: action.payload
            }
    
        default:
            return state;
    }
}

export default userReducer;