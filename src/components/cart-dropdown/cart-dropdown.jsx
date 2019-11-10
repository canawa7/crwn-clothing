import React from 'react';

import CustomButton from '../custom-button/custom-buttom.component';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';

import {selectCartItems} from '../../redux/cart/cart.selector';

import './cart-dropdown.styles.scss';

const CartDropdown = (props) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                props.cart_item_prop.map(cartItem => <CartItem key={cartItem.id} item_prop={cartItem}/>)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    
    </div>
);

//Just so the cart dropwdown do not get rerendered when different reducer is being used
const mapStateToProps = state => {
    console.log('Cart Dropdown rerendered');
    
    return({
        cart_item_prop: selectCartItems(state)
    })
};

export default connect(mapStateToProps)(CartDropdown);

// const mapStateToProps = state => {
//     console.log('Cart Dropdown rerendered');
    
//     return ({
//     cart_item_prop: state.cart.cartItems
// })};

// const mapStateToProps = state => ({
//     cart_item_prop: selectCartItems(state)
// });