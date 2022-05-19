import React from "react";
import style from "./Likes.module.css";

const Likes = (props) => {
    console.log(props.likesCount);
    return (
        <div className={style.profileMessage__likes}>
            <span>{props.likesCount}</span>
        </div>
    );
};

export default Likes;