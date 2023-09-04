import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ABOUT_ROUTES, MAIN_ROUTES } from '../constants/routes';
import './Header.scss';

function Header(props) {
    const location = useLocation();

    const isAboutPageActive = ABOUT_ROUTES.map((route) => route.path).includes(
        location.pathname
    );
    const aboutRef = useRef(null);
    const [clickedAbout, setClickedAbout] = useState(false);

    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [openAboutMenu, setOpenAboutMenu] = useState(false);
    const [switchPage, setSwitchPage] = useState(false);

    const handleOutsideClickAbout = (e) => {
        if (aboutRef.current && !aboutRef.current.contains(e.target)) {
            setClickedAbout(false);
        }
    };

    const handleClickMobileMenu = () => {
        setSwitchPage(true);
        setOpenMobileMenu(false);
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClickAbout);
        return () => {
            document.removeEventListener('click', handleOutsideClickAbout);
        };
    }, []);

    return (
        <>
            <div className="head-padding"></div>

            <div id="head" className="header">
                <a href="/" className="header__logo-img">
                    <img src="https://www.aion.com.cn/web/pc/images/change-logo-img/hd-logo.png?v=20230328"></img>
                </a>

                <ul className="header__nav-list">
                    {MAIN_ROUTES.map((route, index) => (
                        <li key={index} className="menu-item">
                            <NavLink to={route.path} end>
                                {route.name}
                                <span className="underline"></span>
                            </NavLink>
                        </li>
                    ))}

                    <li
                        className={classNames('menu-item', 'menu-item--about', {
                            active: isAboutPageActive,
                        })}
                    >
                        <a ref={aboutRef} onClick={() => setClickedAbout(true)}>
                            <span className="nav-name">埃安</span>
                            <span className="arrow-icon-img"></span>
                            <span className="underline"></span>
                        </a>

                        <ul
                            className={classNames('about-list', {
                                clicked: clickedAbout,
                            })}
                        >
                            {ABOUT_ROUTES.map((route, index) => (
                                <li key={index}>
                                    <NavLink to={route.path} end>
                                        {route.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </li>

                    <div className="button-wrapper">
                        <li className="button-wrapper__button">预约试驾</li>
                        <li className="button-wrapper__button">下载APP</li>
                    </div>
                </ul>

                <div className="header__mobile-nav">
                    <span className="button">选购</span>
                    <span className="button">试驾</span>
                    <div
                        className="menu-open"
                        onClick={() => setOpenMobileMenu(!openMobileMenu)}
                        onMouseEnter={() => setSwitchPage(false)}
                    >
                        打开导航
                    </div>
                </div>

                <div
                    className={classNames('header__mobile-menu', {
                        'header__mobile-menu--open': openMobileMenu,
                        'header__mobile-menu--switch-page': switchPage,
                    })}
                >
                    {MAIN_ROUTES.map((route, index) => (
                        <div key={index} className="mobile-menu-item">
                            <NavLink
                                to={route.path}
                                end
                                onClick={handleClickMobileMenu}
                            >
                                {route.name}
                            </NavLink>
                        </div>
                    ))}

                    <div
                        className={classNames(
                            'mobile-menu-item',
                            'mobile-menu-item--about',
                            {
                                'mobile-menu-item--active': isAboutPageActive,
                                'mobile-menu-item--open': openAboutMenu,
                            }
                        )}
                        onClick={() => setOpenAboutMenu(!openAboutMenu)}
                    >
                        埃安
                        <span className="about-arrow-icon"></span>
                    </div>

                    {openAboutMenu && (
                        <>
                            {ABOUT_ROUTES.map((route, index) => (
                                <div
                                    key={index}
                                    className="mobile-menu-item mobile-menu-item--sub"
                                >
                                    <NavLink
                                        to={route.path}
                                        end
                                        onClick={handleClickMobileMenu}
                                    >
                                        {route.name}
                                    </NavLink>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Header;
