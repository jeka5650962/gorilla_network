import React from "react";
import style from "../Messages.module.scss";

const MessagingMessage = (props) => {
    return (
        <div className={style.message__items}>
            <div className={style.message__item}>
                {props.message}
            </div>
        </div>
    );
};

export default MessagingMessage;