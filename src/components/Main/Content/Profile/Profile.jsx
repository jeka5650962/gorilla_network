import React from "react";
import style from "./Profile.module.scss";
import AddPost from "./AddPost/AddPost";
import Post from "./Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    /* ------------------------------------------------------------------------------------ метод map */

    let postElements = props.postData.map(pd =>
        <Post
            postMessage={pd.postMessage}
            likesCount={pd.likesCount}
        />)

    /* --------------------------------------------------------------------------------------- return */

    return (
        <div className={style.profileWrapper}>
            <ProfileInfo/>
            <AddPost
                addPost={props.addPost}
                newPostText={props.newPostText}
                updateNewPostText={props.updateNewPostText}
            />
            {postElements}
        </div>
    );
};

export default Profile;