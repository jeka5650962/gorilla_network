import React from "react";
import style from "./Post.module.scss";
import avaImg from "../ProfileInfo/images/ava.jpg";

const Post = (props) => {
    return (
        <div className={style.post}>
            <div className={`${style.post__profileInfo} ${style.profileInfo}`}>
                <div className={style.profileInfo__photo}><img src={avaImg} alt="Avatar"/></div>
                <div className={style.profileInfo__text}>
                    <div className={style.profileInfo__name}>Yauheni Salish</div>
                    <div className={style.profileInfo__description}>Looking for an opening React JS Developer</div>
                </div>
            </div>
            <div className={`${style.post__profileMessage} ${style.profileMessage}`}>
                <div className={style.profileMessage__text}>
                    <p>{props.postMessage}</p>
                </div>
                <div className={style.profileMessage__likes}>
                    <span>{props.likesCount}</span>
                </div>
            </div>
        </div>
    );
};

export default Post;