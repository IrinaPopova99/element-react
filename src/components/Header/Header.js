import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import logoImage from './../../assets/images/logo-image.png';
import { LinkButton } from './LinkButton/LinkButton';

function Header() {
    return (
        <div className="header-container">
            <div className="header-container__color">
                <Navbar />
                <div className="header-container__content">
                    <div className="header-container__image">
                        <img src={logoImage} alt="ELEMENT" />
                    </div>

                    <div className="header-container__buttons">
                        <LinkButton className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                            ЗАПИСАТЬСЯ
                            </LinkButton>
                        <LinkButton className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                            ПОСМОТРЕТЬ ВИДЕО <i className="fas fa-play-circle"></i>
                        </LinkButton>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header;
