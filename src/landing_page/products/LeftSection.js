import React from 'react';
function LeftSection({imageURL, header, description, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-6 mb-5">
                    <img src={imageURL} />
                </div>
                <div className="col-6 align-self-center mb-5">
                    <h1 className="text-muted">{header}</h1>
                    <p className='mt-4 fs-5 text-muted'>{description}</p>
                    <div>
                        <a href="" className='fs-5 ' style={{textDecoration: "none", }}>{tryDemo} </a>
                        <a href="" className='fs-5 ' style={{marginLeft: "70px", textDecoration: "none"}}>{learnMore} <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="mt-4">
                        <a href=""><img src={googlePlay} className="" style={{width: "165px"}}/></a>
                        <a href=''><img src={appStore} style={{marginLeft: "30px", width: "150px"}}/></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;