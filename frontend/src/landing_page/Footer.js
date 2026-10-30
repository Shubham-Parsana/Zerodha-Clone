import React from "react";

function Footer() {
  return (
    <div className="container-fluid border_top mt-5" style={{backgroundColor: "#f8f9fa"}}>
      <div className="row mt-5 px-5">
        <div className="col">
          <img src="media/images/logo.svg" style={{ width: "40%" }}></img>
          <p style={{fontSize:"0.8rem" , paddingTop:"1rem"}}>&copy; 2010 2024, Not Zerodha Broking Ltd. All rights reserved.</p>
          <br/>
          <i class="fa-brands fa-x-twitter" style={{color: "#cecece;",paddingRight:'0.8rem', fontSize:'1.5rem'}}></i>
          <i class="fa-brands fa-facebook" style={{color: "#cecece;",paddingRight:'0.8rem', fontSize:'1.5rem'}}></i>
          <i class="fa-brands fa-instagram" style={{color: "#cecece;",paddingRight:'0.8rem', fontSize:'1.5rem'}}></i>
          <i class="fa-brands fa-linkedin-in" style={{color: "#cecece;",paddingRight:'0.8rem', fontSize:'1.5rem'}}></i><br/><br/>
          <i class="fa-brands fa-youtube" style={{color: "#cecece;" , paddingRight:'0.8rem', fontSize:'1.5rem'}}></i>
          <i class="fa-brands fa-whatsapp" style={{color: "#cecece;",paddingRight:'0.8rem', fontSize:'1.5rem'}}></i>
          <i class="fa-brands fa-telegram" style={{color: "#cecece;",paddingRight:'0.8rem', fontSize:'1.5rem'}}></i>
        </div>
        <div className="col">
          <p>Company</p>
          <a href="" className="text-decoration-none" style={{color:'gray'}}>About</a><br />
          <a href="" className="text-decoration-none" style={{color:'gray'}}>Products</a> <br />
          <a href="" className="text-decoration-none" style={{color:'gray'}}>Pricing</a> <br />
          <a href="" className="text-decoration-none" style={{color:'gray'}}>Referral programme</a> <br />
          <a href="" className="text-decoration-none" style={{color:'gray'}}>Careers</a> <br />
          <a href="" className="text-decoration-none" style={{color:'gray'}}>Zerodha.tech</a> <br />
          <a href="" className="text-decoration-none" style={{color:'gray'}}>Press & media</a> <br />
          <a href="" className="text-decoration-none" style={{color:'gray'}}>Zerodha cares</a> <br />
        </div>
        <div className="col">
          <p>Support</p>
          <a href="" className="text-decoration-none" style={{color:'gray'}}>Contact</a><br />
          <a href="" className="text-decoration-none" style={{color:'gray'}}>Support portal</a><br />
          <a href="" className="text-decoration-none" style={{color:'gray'}}>Z-Connect blog</a><br />
          <a href="" className="text-decoration-none" style={{color:'gray'}}>List of charges</a><br />
          <a href="" className="text-decoration-none" style={{color:'gray'}}>Downloads & resources</a><br />
        </div>
        <div className="col">
          <p>Account</p>
          <a href="" className="text-decoration-none" style={{color:'gray'}}>Open an account</a><br />
          <a href="" className="text-decoration-none" style={{color:'gray'}}>Fund transfer</a><br />
          <a href="" className="text-decoration-none" style={{color:'gray'}}>60 day challenge</a><br />
        </div>
      </div>
      <div className="mt-5  text-muted px-5" style={{ fontSize: "0.8rem" , color: "gray" }}>
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE & MCX - SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. - SEBI Registration no.: IN-DP-431-2019 Commodity Trading
          through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001-SEBI
          Registration no.: INZ000038238 Registered Address: Zerodha Broking
          Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
          School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
          any complaints pertaining to securities broking please write to{" "}
          <a href="">complaints@zerodha.com</a>, for DP related to{" "}
          <a href="">dp@zerodha.com.</a> Please ensure you carefully read the
          Risk Disclosure Document as prescribed by SEBI | ICF
        </p>
        <p>
          Procedure to file a complaint on <a href="">SEBI SCORES</a>: Register
          on SCORES portal. Mandatory details for filing complaints on SCORES:
          Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
          Communication, Speedy redressal of the grievances
        </p>
        <a href="">
          Smart Online Dispute Resolution | Grievances Redressal Mechanism
        </a>
        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>
        <p>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please{" "}
          <a href="">create a ticket here</a>.
        </p>
      </div>
    </div>
  );
}

export default Footer;
