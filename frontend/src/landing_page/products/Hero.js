import React from "react";

function Hero() {
  return (
    <div className="container text-center p-5">
      <div className="row mb-5" style={{ paddingTop: "5rem" }}>
        <h1>Zerodha Products</h1>
        <h4 className="text-muted mt-2">
          Sleek, modern and intuitive trading platforms
        </h4>
        <p>
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings <i class="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
      <hr className="mb-5" />
    </div>
  );
}

export default Hero;
