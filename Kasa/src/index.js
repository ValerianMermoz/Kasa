import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Propos from './Pages/Apropos/Apropos';
import Header from './Composants/Header';
import Footer from './Composants/Footer';
import './Composants/Composants.scss';
import './Pages/Apropos/Apropos.scss';
import Banner from './Composants/Banner/Banner';
import Error from './Pages/D404/D404';
import './Pages/D404/D404.scss';
// import Logement from './Fichelogement';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Banner />
      <Routes>
        <Route path="/Apropos" element={<Propos />} />
        <Route path="/D404" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)

reportWebVitals();
