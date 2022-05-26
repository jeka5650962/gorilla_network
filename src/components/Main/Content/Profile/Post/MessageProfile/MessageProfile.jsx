import React from "react";
import style from "./MessageProfile.module.scss";

const MessageProfile = (props) => {
    return (
        <div className={style.profileMessage__text}>
            <p>
                {props.postMessage}
            </p>
        </div>
    );
};

export default MessageProfile;