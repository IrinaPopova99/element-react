import React, { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';
import logoText from './../../assets/images/logo-text.png';
import ModalWindow from '../Common/ModalWindow/ModalWindow';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { modalType } from '../../constants/modalType';
import { contentType } from '../../utils/contentType';
import { useDispatch } from 'react-redux';
import { logoutUserReq } from '../../redux/authUser/actions';

function Navbar() {
    const [click, setClick] = useState(false);
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const contentRef = useRef({});
    const anchorRef = useRef(null);
    const dispatch = useDispatch();

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const onClickAction = (event) => {
        contentRef.current.value = contentType(event.target.id);
        setOpenModal(true);
    }
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const onLogout = () => {
        dispatch(logoutUserReq());
    }

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }
    const isIn = localStorage.getItem('access_token') ? true : false;
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-container__link">
                        <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            {/* <img className="navbar-logo-image" src={logoImage} alt="ELEMENT" /> */}
                            <img className="navbar-logo-text" src={logoText} alt="ELEMENT" />
                        </NavLink>
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
                            <a href="#teachers" className="nav-links" onClick={closeMobileMenu}>
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
                        <li className="nav-item" onMouseOver={handleToggle}
                            onMouseOut={handleClose}
                            aria-controls={open ? 'menu-list-grow' : undefined}
                            aria-haspopup="true" className="menu-list">
                            <span className="nav-links">Преподавателям</span>
                            <Popper open={open} role={undefined} transition disablePortal className="menu-list-item">
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                    >
                                        <Paper >
                                            <ClickAwayListener onClickAway={handleClose}>
                                                {
                                                    isIn ? <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                            <MenuItem onClick={onClickAction}>Эл. журнал</MenuItem>
                                                            <MenuItem onClick={onLogout}>Выйти</MenuItem>
                                                        </MenuList>
                                                        : <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                            <NavLink to='/signinup'><MenuItem>Войти</MenuItem></NavLink>
                                                        </MenuList>
                                                }

                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </li>
                    </ul>
                </div>
            </nav >
            <ModalWindow content={contentRef.current.value} open={openModal} />
        </div >
    )
}

export default Navbar;
