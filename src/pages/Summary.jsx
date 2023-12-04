import React from "react";
// import NavBar from "./NavBar.jsx";
import "../style/SummaryStyle.css";
import TwoDoughnut from "../charts/TwoDoughnut.jsx";
import Doughnut from "../charts/Doughnut.jsx";

function Summary() {
  return (
    <div className="main">
      {/* <NavBar /> */}
      <div className="summary-page">
        <h1>Summary Dashboard</h1>
        <hr />
        <div className="weeks-box">
          <b className="navlink">Today</b>
          <b className="navlink">Yesterday</b>
          <b className="navlink">Week</b>
          <b className="navlink">Month</b>
        </div>
        <div className="customers-box">
          <span>Customers</span>
          <b>4,209</b>
          <div className="customers-chart">
            <div className="customer-text">
              <p>
                <i></i>62% New
              </p>
              <p>
                <i></i>13% Returning
              </p>
              <p>
                <i></i>23% Inactive
              </p>
            </div>
            <div className="chart">
              <Doughnut />
            </div>
          </div>
        </div>
        <div className="customers-box">
          <span>Orders</span>
          <b>1,302</b>
          <div className="customers-chart">
            <div className="customer-text customer-text2">
              <p>
                <i></i>40% Pre Paid
              </p>
              <p>
                <i></i>60% Post Paid
              </p>
            </div>
            <div className="chart">
              <TwoDoughnut />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
