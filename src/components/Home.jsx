import React from 'react';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="homeContainer">
                <img
                    className="homeImage"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="homepage"
                />
            
                <div className="homeRow">
                    <Product />
                    <Product />
                </div>

                <div className="homeRow">
                    <Product />
                    <Product />
                    <Product />
                </div>

                <div className="homeRow">
                    <Product />
                </div>
            </div>
        </div>
    )
}

export default Home;
