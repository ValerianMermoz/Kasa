import { Link, useLocation } from 'react-router-dom';
import './Header.scss';
import Logo from "../../Images/Logo.png";



function Header() {
    const lienActif = useLocation();

    return (
        <div className='Header'>
        <><div className="Header-logo">
        <img src={Logo} className='Logo' alt="Logo Kasa" />
        </div>
        <nav className="headernav">
                <Link to="/" className={`link ${lienActif.pathname === '/' ? 'actif' : ''}`}>Accueil</Link>
                <Link to="/About" className={`link ${lienActif.pathname === '/About' ? 'actif' : ''}`}>A Propos</Link>
            </nav></>
            </div>
    )
}
export default Header;