import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Survey from './Pages/Apropos/Apropos';
import Header from './Composants/Header';
import Footer from './Composants/Footer';
import './Composants/Composants.scss';
import './Pages/Apropos/Apropos.scss';
import Banner from './Composants/Banner/Banner';
// import Error from './D404';
// import Logement from './Fichelogement';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Banner />
      <Routes>
        <Route path="/survey" element={<Survey />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)

reportWebVitals();
