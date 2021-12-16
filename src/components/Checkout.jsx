/* eslint-disable no-unused-vars */
import React from 'react';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {

    const [{ cart, user }, dispatch] = useStateValue();
    let uname = "Guest";
    if (user) {
        uname = user.email.substring(0, user.email.indexOf("@"));
    }

    return (
        <div className='checkout'>
            <div className='checkoutLeft'>
                <img
                    className='checkoutAd'
                    src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
                    alt='Ad' 
                />

                <div>
                    <h3>Hello {uname},</h3>
                    <h2 className='checkoutTitle'>Your Shopping Cart</h2>

                    {cart.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                    
                </div>
                
            </div>

            <div className='checkoutRight'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
