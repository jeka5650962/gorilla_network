import React from "react";
import style from "./Profile.module.scss";
import AddPost from "./AddPost/AddPost";
import Post from "./Posts/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={style.profileWrapper}>
            <ProfileInfo/>
            <AddPost/>
            <Post/>
        </div>
    );
};

export default Profile;