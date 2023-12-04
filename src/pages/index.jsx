import React from "react";
import NavBar from "./NavBar.jsx";
import Summary from "./Summary.jsx";
import Payment from "./Payment.jsx";
import Customers from "./Customers.jsx";
import Orders from "./Orders.jsx";
import Settings from "./Settings.jsx";
import Performance from "./Performance.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Navigate } from "react-router-dom";

function Index() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<NavBar />}>
            {/* <Route path="/" element={<Navigate to={"/summary"} />}></Route> */}
            <Route path="/" element={<Summary />}></Route>
            {/* <Route path="/summary" element={<Summary />}></Route> */}
            <Route path="/payment" element={<Payment />}></Route>
            <Route path="/customers" element={<Customers />}></Route>
            <Route path="/orders" element={<Orders />}></Route>
            <Route path="performance" element={<Performance />}></Route>
            <Route path="settings" element={<Settings />}></Route>
          </Route>
          {/* <Route path="/" element={<Summary />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="performance" element={<Performance/>}></Route>
          <Route path="settings" element={<Settings/>}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default Index;
