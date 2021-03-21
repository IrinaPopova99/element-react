import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import logoImage from './../../assets/images/logo-image.png';
import { Button } from '../Button/Button';

function Header() {
    return (
        <div className="header-container">
            <div className="header-container__color">
                <Navbar />
                <div className="header-container__content container">
                    <div className="row d-flex justify-content-center">
                        <img className="col-3" src={logoImage} alt="ELEMENT" />
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="header-container__buttons d-grid gap-2 d-md-block row">
                            <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                                ЗАПИСАТЬСЯ
                            </Button>
                            <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                                ПОСМОТРЕТЬ ВИДЕО <i className="fas fa-play-circle"></i>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
