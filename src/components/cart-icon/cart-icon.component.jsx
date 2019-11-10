import React from 'react';

import './cart-icon.styles.scss';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import {selectCartItemsCount} from '../../redux/cart/cart.selector';

const CartIcon = (props) => (
    <div className='cart-icon' onClick={props.toggleCartHidden_prop}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{props.itemCount}</span>
    </div>
);

const mapStateToProps = (state) => {

    console.log('cart icon with selector');
    return({
        itemCount: selectCartItemsCount(state)
    })
    
};

const mapDispatchToProps = dispatch => {
    return({
    toggleCartHidden_prop: () => dispatch(toggleCartHidden())
})};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);


// const mapStateToProps = (state) => {

//     console.log('I am being called');
//     return({
//         itemCount: state.cart.cartItems.reduce(
//             (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
//     })
    
// };



// const mapStateToProps = (state) => {

//     // console.log('I am being called');
//     return({
//         itemCount: selectCartItemsCount(state)
//     })
    
// };