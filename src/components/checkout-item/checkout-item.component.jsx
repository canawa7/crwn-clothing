import React from 'react';

import './checkout-item.styles.scss';

import { connect } from "react-redux"; 
import { clearItemFromCart, addItemToCart, removeItem } from "../../redux/cart/cart.action";

const CheckoutItem = ({ cartItem, clear_items, add_item, remove_item}) =>{
  
  const { name, imageUrl, price, quantity } = cartItem;
  return (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'> 
      <div className='arrow' onClick={() => remove_item(cartItem)}>&#10094;</div>
        <span className='value'>{quantity}</span>
      <div className='arrow' onClick={() => add_item(cartItem)}>&#10095;</div>
    </span>
    <span className='price'>{price}</span>
    <div className='remove-button' onClick={() => clear_items(cartItem)}>&#10005;</div>
  </div>
)};

const mapDispatchToProps = dispatch => ({
  clear_items: item => dispatch(clearItemFromCart(item)),
  add_item: item => dispatch(addItemToCart(item)),
  remove_item: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);