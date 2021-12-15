/* eslint-disable no-unused-vars */
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function Header() {

    const [{ cart }, dispatch] = useStateValue();

    return (
        <div className="header">
            
            <Link to="/">
                <img 
                    className="headLogo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="amazon-logo"
                />
            </Link>
            
            <div className="headerSearch">
                <input className="headerSearchInput" type="text" />
                <SearchIcon className="headerSearchIcon"/>
            </div>

            <div className="headerNav">
                
                <Link to="/login">
                    <div className="headerOption">
                        <span className="OptionLineOne">Hello Guest</span>
                        <span className="OptionLineTwo">Sign In</span>
                    </div>
                </Link>

                <div className="headerOption">
                    <span className="OptionLineOne">Returns</span>
                    <span className="OptionLineTwo">& Orders</span>
                </div>

                <div className="headerOption">
                    <span className="OptionLineOne">Your</span>
                    <span className="OptionLineTwo">Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="headerCart">
                        <ShoppingCartIcon />
                        <span className="OptionLineTwo headerCartCount">
                            {cart?.length}
                        </span>
                    </div>
                </Link>
                
            </div>
            
        </div>
    );
}

export default Header;
