import React from 'react';

import './cart-icon.styles.scss';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const CartIcon = (props) => (
    <div className='cart-icon' onClick={props.toggleCartHidden_prop}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden_prop: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);