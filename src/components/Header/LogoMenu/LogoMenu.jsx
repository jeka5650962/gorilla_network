import React from "react";
import style from "./LogoMenu.module.scss";

const LogoMenu = () => {
    return (
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
    );
};

export default LogoMenu;