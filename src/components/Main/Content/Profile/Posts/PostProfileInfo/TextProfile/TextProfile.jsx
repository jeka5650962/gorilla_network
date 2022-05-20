import React from "react";
import style from "./TextProfile.module.css";

const TextProfile = () => {
    return (
        <div className={style.profileInfo__text}>
            <div className={style.profileInfo__name}>Yauheni Salish</div>
            <div className={style.profileInfo__description}>Looking for an opening React JS
                Developer
            </div>
        </div>
    );
};

export default TextProfile;