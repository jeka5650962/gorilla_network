import React from "react";
import style from "./Messages.module.css";

const Messages = () => {
    return (
        <div className={style.messages}>
            <div className={style.messages__body}>
                <div className={style.messages__topInfo}>top</div>
                <div className={`${style.messages__mainInfo} ${style.message}`}>
                    <div className={style.message__profileImage}></div>
                    <div className={style.message__profileName}></div>
                </div>
                <div className={style.messages__bottomInfo}>bottom</div>
            </div>
        </div>
    );
};

export default Messages;