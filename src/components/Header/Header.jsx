import React from "react";
import style from "./Header.module.scss";
import logoImg from "./images/logo.jpg";

const Header = () => {
    return (
        <header className={style.header}>
            <a href="/profile" className={style.header__logo}>
                <img src={logoImg} alt="Logo"/>
            </a>
            <div className={style.header__title}>Gorilla Network</div>
            <nav className={style.header__menu}>
                <ul className={style.header__list}>
                    <li>
                        <a href="https://google.ru/" className={style.header__link}>Settings</a>
                    </li>
                    <li>
                        <a href="https://google.ru/" className={style.header__link}>Help</a>
                    </li>
                    <li>
                        <a href="https://google.ru/" className={style.header__link}>Log Out</a>
                    </li>
                </ul>
                <div className={style.header__burger}>
                    <span></span>
                </div>
            </nav>
        </header>
    );
};

export default Header;