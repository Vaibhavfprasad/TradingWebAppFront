import React from 'react';
function Universe() {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="text-muted mt-5 mb-5 text-center">
                <h3 className='my-5' style={{}}>Want to know more about our technology stack? Check out the <a href="" style={{textDecoration: "none"}}>Zerodha.tech</a> blog.</h3>
                <h1 className='text-muted' style={{margin: "120px 0px 40px 0px"}}> The Zerodha Universe</h1>
                <p className="text-muted fs-5">Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className="row text-center">

                <div className='col-4 align-self-center p-5'>
                    <img src="media\images\smallcaseLogo.png"/>
                    <p className="my-3">Thematic investment platform</p>
                </div>
                <div className='col-4 align-self-center p-5'>
                    <img src="media\images\streakLogo.png" style={{width: "50%"}}/>
                    <p className="my-3">Thematic investment platform</p>
                </div>
                <div className='col-4 align-self-center p-5'>
                    <img src="media\images\sensibullLogo.svg" style={{width: "50%"}}/>
                    <p className="my-3">Thematic investment platform</p>
                </div>
                
                <div className='col-4 align-self-center p-5'>
                    <img src="media\images\zerodhaFundhouse.png" style={{width: "50%"}}/>
                    <p className="my-3">Thematic investment platform</p>
                </div>
                <div className='col-4 align-self-center p-5'>
                    <img src="media\images\goldenpiLogo.png" style={{width: "50%"}}/>
                    <p className="my-3">Thematic investment platform</p>
                </div>
                <div className='col-4 align-self-center p-5'>
                    <img src="media\images\dittoLogo.png" style={{width: "30%"}}/>
                    <p className="my-3">Thematic investment platform</p>
                </div>
            </div>
        </div>
     );
}

export default Universe;