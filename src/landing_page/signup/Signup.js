import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
function Signup() {
    return ( 
        <>
         <div className="text-center">
            <Link to="https://tradingdash.onrender.com" class="btn btn-primary mt-5">
                    Check Dashboard
            </Link>
         </div>   
        </>
     );
}

export default Signup;