import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    //price has to be in cents
    const priceForStripe = price * 100;

    const publishableKey = 'pk_test_fDbz1G1IQdCiAb7GTfSHj9X000yVwNHWcV';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
        //This is where we actually takes charges to the backend
    }

    return(
        <StripeCheckout 
             label='Pay Now'
             name='CRWN Clothing Ltd.'
             billingAddress
             shippingAddress
             image='https://svgshare.com/i/CUz.svg'
             description={`Your total is $${price}`}
             amount={priceForStripe}
             panelLabel='Pay Now'
             token={onToken}
             stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;

//The error is only about how the components is being rendered, nothing to do with the functionality
