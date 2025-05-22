import React from 'react';
function Hero() {
    return ( 
        <div className='container mt-5 p-5 mb-5'>
            <div className="row text-center mb-5">
                <h1 className="mt-5 mb-3" style={{opacity: "0.8", fontSize: "50px"}}>Zerodha Products</h1>
                <h2 className="text-muted fs-4 mb-3">Sleek, modern, and intuitive trading platforms</h2>
                <p className="text-muted fs-5 mb-5">Check out our <a href="" style={{textDecoration: "none"}}>investment offerings →</a></p>
            </div>
        </div>
     );
}

export default Hero;
