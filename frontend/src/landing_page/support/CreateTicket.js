import React from "react";

function CreateTicket() {
    return(
        <div className="container">
            <div className="row text-start">
                <h2 style={{marginTop:"3rem", marginBottom:"1rem"}}>To create a ticket, select a relevant topic</h2>
            </div>
            <div className="row">
                <div className="col-4">
                    <h5><i class="fa-solid fa-circle-plus"></i>Account Opening</h5>
                    <a href="" style={{textDecoration:"none" , display:"block"}}>Resident individual</a>
                    <a href="" style={{textDecoration:"none" , display:"block"}}>Minor</a>
                    <a href="" style={{textDecoration:"none" , display:"block"}}>Non Resident Indian (NRI)</a>
                    <a href="" style={{textDecoration:"none" , display:"block"}}>Company, Partnership, HUF and LLP</a>
                    <a href="" style={{textDecoration:"none" , display:"block"}}>Glossary</a>
                </div>
                <div className="col-4">
                    <h5> <i class="fa-regular fa-user"></i>Your Zerodha Account</h5> 
                    <a href="" style={{textDecoration:"none" , display:"block"}}>Your Profile</a>
                    <a href="" style={{textDecoration:"none" , display:"block"}}>Account modification</a>
                    <a href="" style={{textDecoration:"none" , display:"block"}}>Client Master Report (CMR) and Depository</a>
                    <a href="" style={{textDecoration:"none" , display:"block"}}>Participant (DP)</a>
                    <a href="" style={{textDecoration:"none" , display:"block"}}>Nomination</a>
                    <a href="" style={{textDecoration:"none" , display:"block"}}>Transfer and conversion of securities</a>
                </div>
                <div className="col-4">
                    <h5><i class="fa-solid fa-chart-simple"></i>Kite</h5>
                    <a href="" style={{textDecoration:"none" , display:"block"}}>IPO</a>
                    <a href="" style={{textDecoration:"none" , display:"block"}}>Trading FAQs</a>
                    <a href="" style={{textDecoration:"none" , display:"block"}}>Margin Trading Facility (MTF) and Margins</a>
                    <a href="" style={{textDecoration:"none" , display:"block"}}>Charts and orders</a>
                    <a href="" style={{textDecoration:"none" , display:"block"}}>Alerts and Nudges</a>
                    <a href="" style={{textDecoration:"none" , display:"block"}}>General</a>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-4">
                    <h5><i class="fa-solid fa-box"></i>Funds</h5>
                    <a href="" style={{textDecoration:"none" , display:"block"}}>Add money</a>
                    <a href="" style={{textDecoration:"none" , display:"block"}}>Withdraw money</a>
                    <a href="" style={{textDecoration:"none" , display:"block"}}>Add bank accounts</a>
                    <a href="" style={{textDecoration:"none" , display:"block"}}>eMandates</a>
                </div>
                <div className="col-4">
                    <h5><i class="fa-solid fa-bullseye"></i>Console</h5>
                    <a href="" style={{textDecoration:"none" , display:"block"}}>Portfolio</a>
                    <a href="" style={{textDecoration:"none" , display:"block"}}>Corporate actions</a>
                    <a href="" style={{textDecoration:"none" , display:"block"}}>Funds statement</a>
                    <a href="" style={{textDecoration:"none" , display:"block"}}>Reports</a>
                    <a href="" style={{textDecoration:"none" , display:"block"}}>Profile</a>
                    <a href="" style={{textDecoration:"none" , display:"block"}}>Segments</a>
                </div>
                <div className="col-4">
                    <h5>Coin</h5>
                    <a href="" style={{textDecoration:"none" , display:"block"}}>Mutual funds</a>
                    <a href="" style={{textDecoration:"none" , display:"block"}}>National Pension Scheme (NPS)</a>
                    <a href="" style={{textDecoration:"none" , display:"block"}}>Features on Coin</a>
                    <a href="" style={{textDecoration:"none" , display:"block"}}>Payments and Orders</a>
                    <a href="" style={{textDecoration:"none" , display:"block"}}>General</a>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;