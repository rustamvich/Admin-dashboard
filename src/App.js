import React from "react";
// import NavBar from "./pages/NavBar.jsx";
import Summary from "./pages/Summary.jsx";
import Payment from "./pages/Payment.jsx";
import Customers from "./pages/Customers.jsx";
import Orders from "./pages/Orders.jsx";
import Settings from "./pages/Settings.jsx";
import Performance from "./pages/Performance.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Summary />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="performance" element={<Performance/>}></Route>
          <Route path="settings" element={<Settings/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
