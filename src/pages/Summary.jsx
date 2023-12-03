import React from "react";
import NavBar from "./NavBar.jsx";
import "../style/SummaryStyle.css";
import { NavLink } from "react-router-dom";
import Doughnut from "../charts/Doughnut.jsx";

function Summary() {
  return (
    <div className="main">
      <NavBar />
      <div className="summary-page">
        <h1>Summary Dashboard</h1>
        <hr />
        <div className="weeks-box">
          <NavLink className="navlink">Today</NavLink>
          <NavLink className="navlink">Yesterday</NavLink>
          <NavLink className="navlink">Week</NavLink>
          <NavLink className="navlink">Month</NavLink>
        </div>
        <div className="customers-box">
          <span>Customers</span>
          <b>4,209</b>
          <div className="customers-chart">
            <div className="customer-text">
              <p><i></i>62% New</p>
              <p><i></i>13% Returning</p>
              <p><i></i>23% Inactive</p>
            </div>
            <Doughnut/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
