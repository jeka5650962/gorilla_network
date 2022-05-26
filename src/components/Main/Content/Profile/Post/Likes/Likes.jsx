import React from "react";
import style from "./Likes.module.scss";

const Likes = (props) => {
    return (
        <div className={style.profileMessage__likes}>
            <span>{props.likesCount}</span>
        </div>
    );
};

export default Likes;