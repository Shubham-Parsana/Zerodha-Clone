import React from "react";

function RigthSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-4 mb-5">
      <div className="row">
        <div className="col-6 text-start" style={{ marginTop: "2rem" , paddingLeft:"3rem" }}>
          <h2 className="mb-5 mt-5">{productName}</h2>
          <p>{productDescription}</p>
          <a href={learnMore} style={{ textDecoration: "none" }}>
            Learn More <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-6">
          <img
            src={imageURL}
            style={{ width: "100%", paddingRight: "6rem" }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default RigthSection;
