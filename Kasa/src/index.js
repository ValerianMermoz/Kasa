import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Composants/Header/Header";
import Footer from "./Composants/Footer/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Error from "./Pages/D404/D404";
import Logement from "./Pages/Cardlogement/Cardlogement";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <div className="content">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Cardlogement/:id" element={<Logement />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>
);


