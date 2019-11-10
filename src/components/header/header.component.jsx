import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';

import {auth} from '../../firebase/firebase.utils';

import {connect} from 'react-redux';
//To have access to redux we use connect

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown';

import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.selector';

const Header = (props) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/shop' className='option'>CONTACT</Link>
            {
                props.currentUser_prop ? 
                (<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>)
                :
                (<Link className='option' to='/signin'>SIGN IN</Link>)
            }
            <CartIcon/>
        </div>
        {
            props.cart_hidden_prop ? null : <CartDropdown /> //If hidden is true the hide, if false, the show the dropdown
        }
    </div>
);

//To access the currentUser value from reducer
//This function will return an object where the property are the property that we want to pass in to the Header component


//The input of this function is the state object of the root-reducer
// const mapStateToProps = (state) => ({
//     currentUser_prop: selectCurrentUser(state),
//     cart_hidden_prop: selectCartHidden(state)
// });

//or
const mapStateToProps = createStructuredSelector({
    currentUser_prop: selectCurrentUser,
    cart_hidden_prop: selectCartHidden
});


//by passing the mapStateToProps to connect, we're getting the value of the current 
//user from user.reducer as a prop to the header component
export default connect(mapStateToProps)(Header);

//user.reducer -> root-reducer -> Header
//The header is getting the value from user.reducer


//Advanced destructuring
//Give me the currentUser value off of the user and the hidden value off of the cart
// const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
//     currentUser,
//     hidden
// })

//Before using selector
// const mapStateToProps = (state) => ({
//     currentUser_prop: state.user.currentUser,
//     cart_hidden_prop: state.cart.hidden
// })