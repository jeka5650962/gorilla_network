import React from "react";
import style from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footer__copy}>© Jeka S. 2022. All rights reserved</div>
        </footer>
    );
};

export default Footer;