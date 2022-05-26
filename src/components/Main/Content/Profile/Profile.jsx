import React from "react";
import style from "./Profile.module.scss";
import AddPost from "./AddPost/AddPost";
import Post from "./Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    let postElements = props.postData.map(pd =>
        <Post
            postMessage={pd.postMessage}
            likesCount={pd.likesCount}
        />)

    return (
        <div className={style.profileWrapper}>
            <ProfileInfo/>
            <AddPost/>
            {postElements}
        </div>
    );
};

export default Profile;