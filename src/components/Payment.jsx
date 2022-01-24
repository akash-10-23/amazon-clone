/* eslint-disable no-unused-vars */
import {CardElement , useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { getCartTotal } from '../reducer';
import { useStateValue } from '../StateProvider';
import axios from '../axios';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import { db } from "../firebase";

function Payment() {

    const [{ cart, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [success, setSuccess] = useState(false);
    const [clientSecret, setClientSecret] = useState("");

    const history = useHistory();

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in currencies subunits
                url: `/payments/create?total=${getCartTotal(cart)*100}`
            });    

            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();

    },[cart]);

    const handleSubmit = async(e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation

            db 
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    cart: cart,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            setSuccess(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: "EMPTY_CART"
            });

            history.replace('/orders');
        });
    }

    //console.log("The client secret is >>>", clientSecret);

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className='payment'>
            <div className='paymentContainer'>

                <h1>
                    Checkout (
                    <Link to="/checkout">{cart?.length} items</Link>
                    )
                </h1>
                {/* Delivery Address */}
                <div className='paymentSection'>
                    <div className='paymentTitle'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='paymentAddress'>
                        <p>{user?.email}</p>
                        <p>123 ReactJS Lane</p>
                        <p>Javascript City, WD</p>
                    </div>    
                </div>
                
                {/* Review Item */}
                <div className='paymentSection'>
                    <div className='paymentTitle'>
                        <h3>Review Items and Delivery</h3>
                    </div>

                    <div className='paymentItems'>
                        {cart.map(item => {
                            return (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            );
                        })}
                    </div>
                    
                </div>

                {/* Payment Method */}
                <div className='paymentSection'>
                    <div className='paymentTitle'>
                        <h3>Payment Method</h3>
                    </div>

                    <div className='paymentDetails'>
                        {/* Payment Using Stripe */}

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className='paymentPriceContainer'>
                                <CurrencyFormat 
                                    renderText={(value) => (
                                        <h3>Order total : {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getCartTotal(cart)} 
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />

                                <button disabled={processing || disabled || success}>
                                    <span>
                                        {processing ? <p>Processing</p>: "Buy Now"}
                                    </span>
                                </button>
                            </div>

                            {/* To handle any errors that may occur */}
                            {error && <div>{error}</div>}
                        </form>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment;
