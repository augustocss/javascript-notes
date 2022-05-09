import { useState } from 'react';
import logoImage from '../../assets/images/logo-white.png';
import "../../styles/header.scss";
import UserService from '../../services/users';
import { Navigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

function HeaderLogged(props) {
    const [redirectToHome, setRedirectToHome] = useState(false);

    const logOut = async () => {
        await UserService.logout();
        setRedirectToHome(true);
    }

    if (redirectToHome == true)
        return <Navigate to="/" />

    return (
        <nav className="navbar navbar-logged has-background-custom-purple">
            <div className="navbar-brand">
                <Link to="/notes">
                    <img src={logoImage} />
                </Link>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicMenu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>

            </div>

            <div id="navbarBasicMenu" className="navbar-menu">
                <div className="navbar-item navbar-start">
                    <button className="button open-button"
                        color="white"
                        onClick={() => props.setIsOpen(true)}>
                        <FontAwesomeIcon icon={faList} />
                    </button>
                </div>
                <div className="navbar-item navbar-end" align="right">
                    <div className="navbar-item">
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link button">
                                <span>Augusto</span>
                            </a>
                            <div className="navbar-dropdown">
                                <Link className="navbar-item" to="/users/edit">User Edit</Link>
                                <hr className="navbar-divider" />
                                <a className="navbar-item" href="#" onClick={e => logOut()}>
                                    LogOut
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default HeaderLogged;