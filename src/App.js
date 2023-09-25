import "./App.css";
import React from "react";
import Navbar1 from "./Components/Navbar1";
import Header from "./Components/Header";
import Features from "./Components/Features";
import Services from "./Components/Services";
import Product from "./Components/Product";
import Product1 from "./Components/Product1";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar1/>
      { <Header />}
      {<Features />}
      { <Product />}
      {<Services />}
      {  <Product1 />}
      { <Contact />}
      {<Footer />}
    </div>
  );
}

export default App;
