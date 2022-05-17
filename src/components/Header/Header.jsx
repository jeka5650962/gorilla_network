import React from "react";
import style from "./Header.module.css";

const Header = () => {
    return (
        <header className={style.header}>
            <a href="https://google.ru/" className={style.header__logo}>
                <img
                    src="https://thumbs.dreamstime.com/b/%D1%81%D0%BE%D0%BB%D0%B4%D0%B0%D1%82-%D0%B3%D0%BE%D1%80%D0%B8%D0%BB%D0%BB%D1%8B-%D1%81-%D0%BF%D0%B5%D1%80%D0%B5%D0%BA%D1%80%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%BC-%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD%D0%BE%D0%BC-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%D0%B0-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D0%BB%D0%B8%D1%86%D0%B0-177827722.jpg"
                    alt="Logo"/>
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