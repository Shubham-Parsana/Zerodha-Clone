import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-3">
          <img
            src={imageURL}
            style={{ width: "110%", paddingLeft: "5rem" }}
          ></img>
        </div>
        <div className="col-6 text-start" style={{ paddingLeft: "5rem" }}>
          <h2 className="mb-5 mt-5">{productName}</h2>
          <p>{productDescription}</p>
          <a
            href={tryDemo}
            style={{ textDecoration: "none", marginRight: "1rem" }}
          >
            Try Demo <i class="fa-solid fa-arrow-right"></i>
          </a>
          <a href={learnMore} style={{ textDecoration: "none" }}>
            Learn More <i class="fa-solid fa-arrow-right"></i>
          </a>
          <br />
          <br />
          <a href={googlePlay}>
            <img
              src="media/images/googlePlayBadge.svg"
              style={{ width: "25%", marginRight: "1rem" }}
            ></img>
          </a>
          <a href={appStore}>
            <img
              src="media/images/appstoreBadge.svg"
              style={{ width: "23%" }}
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
