import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps}) => (
    <button className={`${inverted ? 'inverted': ''} ${isGoogleSignIn ? 'goggle-sign-in': ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;

//{Children} is the text inside the JSX element from the other component. i.e: Sign In, Sign Up, etc