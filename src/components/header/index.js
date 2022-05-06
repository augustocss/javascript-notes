import logoImage from '../../assets/images/logo.png';
import '../../styles/header.scss'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/">
                    <img src={logoImage} />
                </Link>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicMenu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicMenu" className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link to="/register" className="button is-white has-text-custom-purple">Register</Link>
                            <Link to="/login" className="button is-outlined is-custom-purple">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;