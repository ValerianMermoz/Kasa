import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import App from './Pages/Apropos/Apropos';
import Header from './Composants/Header';
import Footer from './Composants/Footer';
import './Composants/Composants.scss';
import './Pages/Apropos/Apropos.scss';
import './Composants/Banner/Banner.scss';
import Banner from './Composants/Banner/Banner';
import Error from './Pages/D404/D404';
import './Pages/D404/D404.scss';
import Logement from './Pages/Fichelogement/Fichelogement';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Banner />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/Fichelogement" element={<Logement />} />
        <Route path="/Apropos" element={<App />} />
        <Route path="/D404" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)

reportWebVitals();
