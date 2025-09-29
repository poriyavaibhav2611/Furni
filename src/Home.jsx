import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footers";
import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./Components/Context/CartContext";
import Shop from "./Components/Pages/Shop";
import About from "./Components/Pages/About";
import Services from "./Components/Pages/Services";
import Blogs from "./Components/Pages/Blogs";
import Contact from "./Components/Pages/Contact";
import Login from "./Components/Pages/Login";
import Cart from "./Components/Pages/Cart";
import Checkout from "./Components/Pages/Checkout";
import Thankyou from "./Components/Pages/Thankyou";

const Home = () => {
  return (
    <>
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Blog" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
      <Footer />
      </CartProvider>
    </>
  );
};

export default Home;
