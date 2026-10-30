import React from "react";

function Stats() {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-6">
          <h2 className="mb-4 fs-2">Trust with confidence</h2>
          <h3 className="fs-4">Customer-first always</h3>
          <p className="text-muted fs-10">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>
          <h3 className="fs-4">No spam or gimmicks</h3>
          <p className="text-muted fs-10">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, th way you like.
          </p>
          <h3 className="fs-4">The Zerodha universe</h3>
          <p className="text-muted fs-10">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h3 className="fs-4">Do better with money</h3>
          <p className="text-muted fs-10">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6">
          <img src="media/images/ecosystem.png" style={{ width: "90%" }} />
          <div className="text-center mt-4 mb-4 d-flex justify-content-center align-items-center">
            <a href="" className="mr-5 text-decoration-none">
              Explore our products <i class="fa-solid fa-arrow-right"></i>
            </a>{" "}
            &nbsp;&nbsp;&nbsp;
            <a href="" className="mr-5 text-decoration-none">
              Try kite demo <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
