import React from "react";

function Universe() {
  return (
    <div className="container text-center">
      <p className="mb-5">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog
      </p>
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <br />
      <div className="row text-center">
        <div className="col-4 p-3">
          <img src="media/images/smallcaseLogo.png" style={{}}></img>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/streakLogo.png" style={{ width: "50%" }}></img>
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "80%" }}
          ></img>
          <p className="text-small text-muted">Options trading platform</p>
        </div>
      </div>{" "}
      <br></br>
      <div className="row text-center">
        <div className="col-4 p-3">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "70%" }}
          ></img>
          <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/goldenpiLogo.png"></img>
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/dittoLogo.png" style={{ width: "40%" }}></img>
          <p className="text-small text-muted">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
      <div className="row">
        <button className="btn btn-primary" style={{width:"17%" , marginLeft:"43%"}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
