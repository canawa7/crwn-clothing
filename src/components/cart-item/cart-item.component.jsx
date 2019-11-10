import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item'/>
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>
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



// const CartItem = (props) => (
//     <div className='cart-item'>
//         <img src={props.imageUrl} alt='item'/>
//         <div className='item-details'>
//             <span className='name'>{props.name}</span>
//             <span className='price'>{props.quantity} x ${props.price}</span>
//         </div>
//     </div>
// );