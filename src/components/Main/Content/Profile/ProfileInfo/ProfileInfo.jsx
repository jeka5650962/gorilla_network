import React from "react";
import style from "./ProfileInfo.module.scss";

const ProfileInfo = () => {
    return (
        <div className={style.profile}>
            <div className={style.profile__image}></div>
            <div className={style.profile__info}>
                <div className={style.profile__avatar}>
                    <img
                        src="https://media-exp1.licdn.com/dms/image/C4D03AQGP5l7bQHqE6A/profile-displayphoto-shrink_200_200/0/1633726581090?e=1657756800&v=beta&t=fISZxc6Jmt1lC2p18tlw-FUiEIVCVNojRFLR98C8y_o"
                        alt="Avatar"/>
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