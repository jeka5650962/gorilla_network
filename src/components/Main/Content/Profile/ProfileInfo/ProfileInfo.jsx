import React from "react";
import style from "./ProfileInfo.module.scss";
import avaImg from "./images/ava.jpg";

const ProfileInfo = () => {

    return (
        <div className={style.profile}>
            <div className={style.profile__image}></div>
            <div className={style.profile__info}>
                <div className={style.profile__avatar}>
                    <img src={avaImg} alt="Avatar"/>
                </div>
            </div>
            <div className={style.profile__text}>
                <div className={style.profile__name}>Yauheni Salish</div>
                <div className={style.profile__description}>Looking for an opening React JS Developer</div>
            </div>
        </div>
    );
};

export default ProfileInfo;