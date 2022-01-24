/* eslint-disable no-unused-vars */
import React from 'react';
import { useStateValue } from '../StateProvider';

function CheckoutProduct(props) {
    const { id, title, price, image, rating, hideButton } = props;
    const [{ cart }, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART", 
            id: id
        });    
    }

    return (
        <div className='checkoutProduct'>
            <img
                className='checkoutProductImage'
                src={image}
                alt='' 
            />
            
            <div className='checkoutProductInfo'>
                <p className='checkoutProductTitle'>{title}</p>
                <p className='checkoutProductPrice'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProductRating'>
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>    
                    ))} 
                </div>
                {!hideButton && <button onClick={removeFromCart}>
                                    Remove From Cart
                                </button>
                }
                
            </div>
        </div>
    )
}

export default CheckoutProduct;
