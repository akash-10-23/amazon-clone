/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Payment() {

    const [{ cart, user }, dispatch] = useStateValue();

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
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment;
