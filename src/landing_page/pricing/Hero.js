import React from 'react';
function Hero() {
    return ( 
        <div className="container">
            <div className="row">
                <div className="text-center mt-5 mb-5">
                    <h1>Pricing</h1>
                    <p className="fs-5 my-4 text-muted">Free equity investment and flat ₹20 traday and F&O trades</p>
                </div>



                <div className="col-4 p-5 text-center">
                    <img src='media\images\pricingEquity.svg'/>
                    <h2>Free equity delivery</h2>
                    <p className="text-muted mt-2">All equity investments (NSE, BSE),<br/>
                        are absolutely free-₹0 brokerage.
                    </p>
                </div>
                <div className="col-4 p-5 text-center">
                    <img src='media\images\intradayTrades.svg'/>
                    <h2>Intraday and F&O trades</h2>
                    <p className="text-muted mt-2">Flat Rs.20 or 0.03%(whichever is lower)<br/>
                    per executed order an intraday trades<br/>
                    across equity, currency, and commodity trades.
                    </p>
                </div>
                <div className="col-4 p-5 text-center">
                    <img src='media\images\pricingEquity.svg'/>
                    <h2>Free direct MF</h2>
                    <p className="text-muted mt-2">All direct mutual fund investments are absolutely free-₹0<br/>
                    commissios & DP charges.
                    </p>
                </div>
            </div>
        </div>
     );
}

export default Hero;
