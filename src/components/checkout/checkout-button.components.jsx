import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForCheckout = price * 100;
    const publishableKey = 'pk_test_8wMQlsfoK9j9RQP1Jwnsx6c800FPsuY5VV';

    const onToken = (token) => {
        console.log(token)
        alert('Pyament Successful');
    }
    return (
        <StripeCheckout 
            label="Pay Now"
            name="Clothing Pty Ltd"
            image="https://stripe.com/img/documentation/checkout/marketplace.png"
            billingAddress
            shippingAddress
            price={priceForCheckout}            
            description={`Your cart amount is $${priceForCheckout}`}
            amount={priceForCheckout}
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;