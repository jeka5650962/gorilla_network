import React from "react";
import style from "./Post.module.scss";
import MessageProfile from "./MessageProfile/MessageProfile";
import Likes from "./Likes/Likes";
import PostProfileInfo from "./PostProfileInfo/PostProfileInfo";

const Post = () => {
    return (
        <div className={style.post}>
            <PostProfileInfo/>
            <div className={`${style.post__profileMessage} ${style.profileMessage}`}>
                <MessageProfile/>
                <Likes likesCount="1988"/>
            </div>
        </div>
    );
};

export default Post;