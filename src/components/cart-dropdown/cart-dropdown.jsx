import React from 'react';

import CustomButton from '../custom-button/custom-buttom.component';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';

import {selectCartItems} from '../../redux/cart/cart.selector';
import {createStructuredSelector} from 'reselect';
import { withRouter } from  'react-router-dom';
import { toggleCartHidden } from "../../redux/cart/cart.action";

import './cart-dropdown.styles.scss';

const CartDropdown = (props) => {
    return(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                props.cart_item_prop.length ?
                (props.cart_item_prop.map(cartItem => <CartItem key={cartItem.id} item_prop={cartItem}/>)) :
                (<span className='empty-message'>Your cart is empty</span>)
            }
        </div>
        <CustomButton onClick={() => {
            props.history.push('/checkout');
            props.dispatch(toggleCartHidden()); //we can use one dispatch without having to write the whole mapToDispatch function for connect
        }}>GO TO CHECKOUT</CustomButton>
    
    </div>
)};

//Just so the cart dropwdown do not get rerendered when different reducer is being used
const mapStateToProps = createStructuredSelector({
        cart_item_prop: selectCartItems
});

//Even if we dont put mapToDispatch as the second argument for connect, connect already passes it into the
//object as a prop as long as we have the ...otherProp so we can use it
//The reason for this is to use when we only have 1 action

export default withRouter(connect(mapStateToProps)(CartDropdown));
//We wrap the connect inside the withRouter, the withRouter is just taking the component from connect as its argument
//THe order matter because withRouter will pass the match history and location object into the component that is being wrapped
//We want what comes out of the connect component to receive those props

// const mapStateToProps = state => {
//     console.log('Cart Dropdown rerendered');
    
//     return ({
//     cart_item_prop: state.cart.cartItems
// })};

// const mapStateToProps = state => ({
//     cart_item_prop: selectCartItems(state)
// });

// const mapStateToProps = state => {
//     console.log('Cart Dropdown rerendered');
//     return({
//         cart_item_prop: selectCartItems(state)
//     })
// };

