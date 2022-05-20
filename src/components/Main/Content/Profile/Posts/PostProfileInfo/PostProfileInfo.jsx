import React from "react";
import style from "./PostProfileInfo.module.css";
import Photo from "./Photo/Photo";
import TextProfile from "./TextProfile/TextProfile";

const PostProfileInfo = () => {
    return (
        <div className={`${style.post__profileInfo} ${style.profileInfo}`}>
            <Photo/>
            <TextProfile/>
        </div>
    );
};

export default PostProfileInfo;