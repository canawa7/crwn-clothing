import React from 'react';
import './cart-item.styles.scss';

const CartItem = (props) => (
    <div className='cart-item'>
        <img src={props.item_prop.imageUrl} alt='item'/>
        <div className='item-details'>
            <span className='name'>{props.item_prop.name}</span>
            <span className='price'>{props.item_prop.quantity} x ${props.item_prop.price}</span>
        </div>
    </div>
);

export default CartItem;


// const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
//     <div className='cart-item'>
//         <img src={imageUrl} alt='item'/>
//         <div className='item-details'>
//             <span className='name'>{name}</span>
//             <span className='price'>{quantity} x ${price}</span>
//         </div>
//     </div>
// );


// const CartItem = ({item_prop}) => (
//     <div className='cart-item'>
//         <img src={item_prop.imageUrl} alt='item'/>
//         <div className='item-details'>
//             <span className='name'>{item_prop.name}</span>
//             <span className='price'>{item_prop.quantity} x ${item_prop.price}</span>
//         </div>
//     </div>
// );