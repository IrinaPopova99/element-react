import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { Button } from './Button';
import './Navbar.css';
import logoImage from './../../assets/images/logo-image.png';
import logoText from './../../assets/images/logo-text.png';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 1200) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton(false);
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-container__link">
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            {/* <img className="navbar-logo-image" src={logoImage} alt="ELEMENT" /> */}
                            <img className="navbar-logo-text" src={logoText} alt="ELEMENT" />
                        </Link>
                    </div>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <a href="#programs" className="nav-links" onClick={closeMobileMenu}>
                                Направления
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="javascript:window.scrollTo(500, 1450);" className="nav-links" onClick={closeMobileMenu}>
                                Преподаватели
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#schedule" className="nav-links" onClick={closeMobileMenu}>
                                Расписание
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#gallery" className="nav-links" onClick={closeMobileMenu}>
                                Галерея
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link to="/fortechers" className="nav-links" onClick={closeMobileMenu}>
                                Преподавателям
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/signup" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li> */}
                    </ul>
                    {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
//rfce - make all structure