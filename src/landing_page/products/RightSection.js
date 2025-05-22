import React from 'react';
function RightSection({header, description, url, imageURL}) {
    return (  
         <div className="container mt-5 mb-5">
            <div className="row">
            <div className="col-6 align-self-center mt-5 mb-5">
                    <h1 className="text-muted">{header}</h1>
                    <p className='mt-4 fs-5 text-muted'>{description}</p>
                    <div>
                        <a href="" className='fs-5 ' style={{textDecoration: "none", }}>{url} </a>
                        
                    </div>
                   
                </div>
            
                <div className="col-6 mt-5 mb-5" style={{}}>
                    <img src={imageURL} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;