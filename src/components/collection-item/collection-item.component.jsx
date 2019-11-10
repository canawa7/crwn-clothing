import React from 'react';

import './collection-item.styles.scss';

import CustomButton from '../custom-button/custom-buttom.component';

import {connect} from 'react-redux';
import {addItemToCart} from '../../redux/cart/cart.action';

const CollectionItem = ({item_prop, addItem_prop}) => {
    
    //Destructuring from the item prop
    const{name, price, imageUrl} = item_prop;

    return (
    <div className='collection-item'>
        <div className='image' style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton inverted onClick={() => addItem_prop(item_prop)} > Add to cart </CustomButton>
    </div>
)};
//Curly brackets is to imply we're gonna use multiple lines of javascript code

const mapDispatchToProps = dispatch => ({
    addItem_prop: item => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);