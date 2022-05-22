import React from "react";
import style from "./Post.module.scss";
import MessageProfile from "./MessageProfile/MessageProfile";
import Likes from "./Likes/Likes";
import PostProfileInfo from "./PostProfileInfo/PostProfileInfo";

// ----------------------------------------------------------------------------------------------------- компонента Post
const Post = (props) => {
    return (
        <div className={style.post}>
            <PostProfileInfo/>
            <div className={`${style.post__profileMessage} ${style.profileMessage}`}>
                <MessageProfile postMessage={props.postMessage}/>
                <Likes likesCount={props.likesCount}/>
            </div>
        </div>
    );
};

export default Post;