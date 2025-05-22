import React from 'react';
function CreateTicket() {
    return (  
        <div className="container">
            <div className="row">
                <h2 className="text-muted my-5">To create a ticket, select a relevant topic</h2>
                <div className="col-4 mt-3">
                    <h4><i class="fa fa-plus-circle" aria-hidden="true" style={{marginRight: "14px"}}></i>Account Opening</h4>
                    <div className='mx-5 my-4' style={{lineHeight: "2"}}>
                        <a href="" className="fs-5 "style={{textDecoration: "none",}}>Resident individual</a><br/>
                        <a href="" className="fs-5"style={{textDecoration: "none"}}>Minor</a><br/>
                        <a href="" className="fs-5"style={{textDecoration: "none"}}>Non Resident Indian (NRI)</a><br/>
                        <a href="" className="fs-5"style={{textDecoration: "none"}}>Company, Partnership, HUF and LLP</a><br/>
                        <a href="" className="fs-5"style={{textDecoration: "none"}}>Glossary</a><br/>
                    </div>
                </div>
                <div className="col-4 mt-3" style={{lineHeight: "2"}}>
                    <h4><i class="fa-solid fa-user" style={{marginRight: "14px"}}></i>Your Zerodha Account</h4>
                    <div className='mx-5 my-4'>
                        <a href="" className="fs-5 "style={{textDecoration: "none",}}>Your Profile</a><br/>
                        <a href="" className="fs-5"style={{textDecoration: "none"}}>Account modification</a><br/>
                        <a href="" className="fs-5"style={{textDecoration: "none"}}>Client Master Report (CMR) and Depository Participant (DP)</a><br/>
                        <a href="" className="fs-5"style={{textDecoration: "none"}}>Nomination</a><br/>
                        <a href="" className="fs-5"style={{textDecoration: "none"}}>Transfer and conversion of securities</a><br/>
                    </div>
                </div>
                <div className="col-4 mt-3" style={{lineHeight: "2"}}>
                    <h4><i class="fa-solid fa-chart-simple" style={{marginRight: "14px"}}></i>Kite</h4>
                    <div className='mx-5 my-4'>
                        <a href="" className="fs-5 "style={{textDecoration: "none",}}>IPO</a><br/>
                        <a href="" className="fs-5"style={{textDecoration: "none"}}>Trading FAQs</a><br/>
                        <a href="" className="fs-5"style={{textDecoration: "none"}}>Margin Trading Facility (MTF) and Margins</a><br/>
                        <a href="" className="fs-5"style={{textDecoration: "none"}}>Charts and orders</a><br/>
                        <a href="" className="fs-5"style={{textDecoration: "none"}}>Alerts and Nudges</a><br/>
                    </div>
                </div>


                <div className="col-4 mt-3" style={{lineHeight: "2"}}>
                    <h4><i class="fa-solid fa-wallet" style={{marginRight: "14px"}}></i>Funds</h4>
                     <div className='mx-5 my-4'>
                        <a href="" className="fs-5 "style={{textDecoration: "none",}}>Add money</a><br/>
                        <a href="" className="fs-5"style={{textDecoration: "none"}}>Withdraw money</a><br/>
                        <a href="" className="fs-5"style={{textDecoration: "none"}}>Add bank accounts</a><br/>
                        <a href="" className="fs-5"style={{textDecoration: "none"}}>Charts and orders</a><br/>
                        <a href="" className="fs-5"style={{textDecoration: "none"}}>eMandates</a><br/>
                    </div>
                </div>
                <div className="col-4 mt-3" style={{lineHeight: "2"}}>
                    <h4><i class="fa-regular fa-circle-dot" style={{marginRight: "14px"}}></i>Console</h4>
                    <div className='mx-5 my-4'>
                        <a href="" className="fs-5 "style={{textDecoration: "none",}}>Portfolio</a><br/>
                        <a href="" className="fs-5 "style={{textDecoration: "none",}}>Corporate actions</a><br/>
                        <a href="" className="fs-5 "style={{textDecoration: "none",}}>Funds statement</a><br/>
                        <a href="" className="fs-5 "style={{textDecoration: "none",}}>Reports</a><br/>
                        <a href="" className="fs-5 "style={{textDecoration: "none",}}>Profile</a><br/>
                        <a href="" className="fs-5 "style={{textDecoration: "none",}}>Segments</a><br/>
                    </div>
                </div>
                <div className="col-4 mt-3" style={{lineHeight: "2"}}>
                    <h4><i class="fa-solid fa-coins" style={{marginRight: "14px"}}></i>Coin</h4>
                    <div className='mx-5 my-4'>
                        <a href="" className="fs-5 "style={{textDecoration: "none",}}>Understanding mutual funds and Coin</a><br/>
                        <a href="" className="fs-5 "style={{textDecoration: "none",}}>Coin app</a><br/>
                        <a href="" className="fs-5 "style={{textDecoration: "none",}}>Coin web</a><br/>
                        <a href="" className="fs-5 "style={{textDecoration: "none",}}>Transactions and reports</a><br/>
                        <a href="" className="fs-5 "style={{textDecoration: "none",}}>National Pension Scheme (NPS)</a><br/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;