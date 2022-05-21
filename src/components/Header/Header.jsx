import React from "react";
import style from "./Header.module.scss";
import Logo from "./Logo/Logo";
import LogoMenu from "./LogoMenu/LogoMenu";

const Header = () => {
    return (
        <header className={style.header}>
            <Logo/>
            <div className={style.header__title}>Gorilla Network</div>
            <LogoMenu/>
        </header>
    );
};

export default Header;