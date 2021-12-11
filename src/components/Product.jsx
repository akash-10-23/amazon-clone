import React from 'react';

function Product() {
    return (
        <div className="product">
            <div className="productInfo">
                <p>Title</p>
                <p className="productPrice">
                    <small>$</small>
                    <strong>Price</strong>
                </p>
                <div className="productRating">
                    <p>🌟</p>
                </div>
            </div>

            <img
                src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                alt=""    
            />

            <button>Add to Cart</button>
        </div>
    )
}

export default Product;
