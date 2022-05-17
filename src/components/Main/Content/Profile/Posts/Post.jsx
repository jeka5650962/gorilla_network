import React from "react";
import style from "./Post.module.css";
import Photo from "./Photo/Photo";
import TextProfile from "./TextProfile/TextProfile";
import MessageProfile from "./MessageProfile/MessageProfile";
import Likes from "./Likes/Likes";

const Post = () => {
    return (
        <div className={style.post}>
            <div className={`${style.post__profileInfo} ${style.profileInfo}`}>
                <Photo/>
                <TextProfile/>
            </div>
            <div className={`${style.post__profileMessage} ${style.profileMessage}`}>
                <MessageProfile/>
                <Likes/>
            </div>
        </div>
    );
};

export default Post;