import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center border-bottom mb-5" style={{ paddingTop: "6rem"}}>
        <h1>Pricing</h1>
        <p className="text-muted mt-3 mb-5">
          Free equity investments and flat ₹20 traday and F&O trades
        </p>
      </div>
      <div className="row mt-5 text-center">
        <div className="col-4">
          <img
            src="media/images/pricingEquity.svg"
            style={{ width: "80%" }}
          ></img>
          <h3>Free equity delivery</h3>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free - ₹0
            brokerage.
          </p>
        </div>
        <div className="col-4">
          <img
            src="media/images/intradayTrades.svg"
            style={{ width: "80%" }}
          ></img>
          <h3>Intraday and F&O trades</h3>
          <p className="text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-4">
          <img
            src="media/images/pricingEquity.svg"
            style={{ width: "80%" }}
          ></img>
          <h3>Free direct MF</h3>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free - ₹0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
