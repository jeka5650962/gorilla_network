import React from "react";
import style from "./MessageProfile.module.css";

const MessageProfile = () => {
    return (
        <div className={style.profileMessage__text}>
            <p>
                Ornare mattis in dolor venenatis efficitur justo amet, mattis pellentesque dictumst. Leo, morbi justo
                vel sit molestie urna integer mauri.
            </p>
            <p>
                Dapibus morbi sed dapibus in ornare urna orci, lectus sit et. Ex. Efficitur est. Tortor, ornare morbi
                sit eleifend dictum.
            </p>
        </div>
    );
};

export default MessageProfile;