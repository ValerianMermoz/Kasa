import { Link } from 'react-router-dom'
import './Header.scss';
import Logo from "../../Images/Logo.png";


function Header() {
    return (
        <div className='Header'>
        <><div className="Header-logo">
        <img src={Logo} className='Logo' alt="Logo Kasa" />
        </div>
        <nav className="headernav">
                <Link to="/">Accueil</Link>
                <Link to="/Apropos">A Propos</Link>
            </nav></>
            </div>
    )
}
export default Header 