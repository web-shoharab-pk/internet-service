import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = ({handlePaymentSuccess}) => {
    const [paymentError, setPaymentError] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(null)
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) { 
            setPaymentError(error.message);
            setPaymentSuccess(null)
        } else { 
            setPaymentSuccess(paymentMethod)
            setPaymentError(null);
            handlePaymentSuccess(paymentMethod.id, paymentMethod.card)
        }
    };
    return (
        <div>
            {
                paymentError && <p style={{ display: paymentError ? 'block' : 'none' }} className="text-danger">{paymentError}</p>
            }
            {
                paymentSuccess && <p style={{ display: paymentSuccess.card ? 'block' : 'none' }} className="text-success">Your payment is success. Your Card Number ****{paymentSuccess.card.last4} Thank your !!</p>
            }
            <form onSubmit={handleSubmit}>



                <CardElement />
                <button type="submit" className="brandBtn w-25 mt-5" disabled={!stripe}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default PaymentForm;