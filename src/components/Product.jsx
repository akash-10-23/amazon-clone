import React from 'react';

function Product(props) {
    const {id, title, price, rating, image } = props;
    return (
        <div className="product">
            <div className="productInfo">
                <p>{title}</p>
                <p className="productPrice">
                    <small>$</small>
                    <strong>{price}</strong>
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

            <button>Add to Cart</button>
        </div>
    )
}

export default Product;
