import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Dashboard from "./components/Dashboard/Dashboard";
import Users from "./components/Dashboard/Users";
import Products from "./components/Dashboard/Products";
import Orders from "./components/Dashboard/Orders";
import Vehicles from "./components/Dashboard/Vehicles";
import Business from "./components/Dashboard/Business";
import Security from "./components/Dashboard/Security";
import Revenue from "./components/Dashboard/Revenue";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route path="users" element={<Users />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="vehicles" element={<Vehicles />} />
            <Route path="business" element={<Business />} />
            <Route path="security" element={<Security />} />
            <Route path="revenue" element={<Revenue />} />{" "}
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
