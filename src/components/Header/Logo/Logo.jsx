import React from "react";
import style from "./Logo.module.scss";
import logoImg from "./images/logo.jpg";

const Logo = () => {
    return (
        <a href="/profile" className={style.header__logo}>
            <img src={logoImg} alt="Logo"/>
        </a>
    );
};

export default Logo;