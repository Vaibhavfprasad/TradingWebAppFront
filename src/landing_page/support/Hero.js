import React from 'react';
function Hero() {
    return ( 
        <div>
            <div className="container-fluid mainSupport p-5">
                <div className="supportWrapper p-5 mb-5">
                    <h3 className="" style={{paddingLeft: "250px"}}>Support Portal</h3>
                    <a href="" className="" style={{paddingRight: "250px"}}>Track tickets</a> 
                </div>
                <div className="row ">
                    <div className="col " style={{margin: "0 10px 0 250px"}}>
                        <h2 className='mb-5'>Search for an answer or browse help topics to create a ticket</h2>
                        <input placeholder='Eg: how do i activate F&O, why is my order getting rejected...'/>
                        <div className="aTags mt-4" >
                            <a href="">Track account opening</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="">Track segment activation</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="">Intraday margins</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                            <a href="">Kite user manual</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                    </div>
                    <div className="col  px-5 mt-5">
                        <h3 className="mb-4">Featured</h3>
                        <ol className="mx-5">
                            <h4><li><a href="">BSE StAR mutual fund platform downtime</a></li></h4><br/>
                            <h4><li><a href="">Offer for sale (OFS) – May 2025</a></li></h4>
 
                        </ol>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Hero;