import React from 'react';

import CustomButton from '../custom-button/custom-buttom.component';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';

import './cart-dropdown.styles.scss';

const CartDropdown = (props) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                props.cart_item_prop.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    
    </div>
);

const mapStateToProps = state => ({
    cart_item_prop: state.cart.cartItems
});

export default connect(mapStateToProps)(CartDropdown);