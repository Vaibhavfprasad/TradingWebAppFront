import React from 'react';
import {Link} from "react-router-dom";
function NotFound() {
    return ( 
        <div className="container">
            <div className="row p-5 m-5">
                <h2 className="text-muted mb-3">404</h2>
                <h1 className="text-muted" style={{fontSize:"50px"}}>Kiaan couldn’t find <br/>that page</h1>
                <h2 className="text-muted mt-3">We couldn’t find the page you were looking <br/>for. Visit <Link to="/" style={{textDecoration: "none"}}>Zerodha’s home page</Link></h2>
            </div>

        </div>
     );
}

export default NotFound;