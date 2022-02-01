/* eslint-disable no-unused-vars */
import React from 'react';
import { useStateValue } from '../StateProvider';
import CurrencyFormat from 'react-currency-format';

function Product(props) {
    const { id, title, price, rating, image } = props;
    const [{ cart }, dispatch] = useStateValue();
    
    const addToCart = () => {

        // ADD ITEM TO THE CART
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
                rating: rating
            }
        });
    };

    return (
        <div className="product">
            <div className="productInfo">
                <p>{title}</p>
                <p className="productPrice">

                    <CurrencyFormat 
                        renderText={(value) => (
                            <strong>{value}</strong>
                        )}
                        decimalScale={2}
                        value={price} 
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₹"}
                    />
                </p>
                <div className="productRating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>    
                    ))} 
                </div>
            </div>
                        
            <img
                src={image}
                alt=""    
            />

            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product;
