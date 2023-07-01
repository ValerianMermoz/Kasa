import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Survey from './Pages/Apropos/Apropos';
import Header from './Pages/Composants/Header';
import Footer from './Pages/Composants/Footer';
import './Pages/Composants/Composants.css';

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
