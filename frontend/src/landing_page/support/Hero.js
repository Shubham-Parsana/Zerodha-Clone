import React from "react";

function Hero() {
  return (
    <section
      id="support-hero"
      className="container-fluid"
      style={{ color: "white", backgroundColor: "#2c3e50", padding: "2rem" }}
    >
      <div className="" id="supportWrapper">
        <h4 style={{ marginTop: "4rem", marginBottom: "1rem" }}>
          Support Portal
        </h4>
        <a
          href=""
          style={{
            marginTop: "4rem",
            marginBottom: "4rem",
            marginRight: "3rem",
            color: "white",
          }}
        >
          Track Tickets
        </a>
      </div>
      <div className="row">
        <div className="col-6">
          <h4>Search for an answer or browse help topics to create a ticket</h4>
          <input
            type="text"
            placeholder="Eg: how do i activate F&O, why is my order getting rejected.."
            style={{ height: "3rem", width: "30rem", marginTop: "1rem" }}
          ></input>
          <br></br> <br></br>
          <a href="" style={{ color: "white", marginRight: "1rem" }}>
            Track account opening
          </a>
          <a href="" style={{ color: "white", marginRight: "1rem" }}>
            Track segment activation
          </a>
          <a href="" style={{ color: "white", marginRight: "1rem" }}>
            Intraday margins
          </a>{" "}
          <br></br>
          <a href="" style={{ color: "white", marginRight: "1rem" }}>
            Kite user manual
          </a>
        </div>
        <div className="col-6 mt-4">
          <h4>Features</h4>
          1.
          <a href="" style={{ color: "white", marginRight: "1rem" }}>
            Quarterly Settlement of Funds - July 2025
          </a>
          <br></br> <br></br>
          2.
          <a href="" style={{ color: "white", marginRight: "1rem" }}>
            Exclusion of F&O contracts on 8 securities from August 29, 2025
          </a>
          <br></br>
        </div>
      </div>
    </section>
  );
}

export default Hero;
