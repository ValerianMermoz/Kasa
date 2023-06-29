import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Survey from './components/Apropos';
import Header from './components/Header';
import Footer from './components/Footer';

// import Error from './D404';
// import Logement from './Fichelogement';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)

reportWebVitals();
