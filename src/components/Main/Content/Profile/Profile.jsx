import React from "react";
import style from "./Profile.module.scss";
import AddPost from "./AddPost/AddPost";
import Post from "./Posts/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {

    // ---------------------------------------------------------------------------------------- postData
    let postData = [
        {
            postMessage: "First post. Quisque leo urna, vulputate eget ipsum non, dignissim elementum lectus.",
            likesCount: 1988,
        },
        {
            postMessage: "Second post. Aliquam feugiat vestibulum tortor, non sagittis sem tempus at. Nulla.",
            likesCount: 2022,
        },
        {
            postMessage: "Third post. Vestibulum maximus eu erat vel venenatis. Praesent mattis vulputate risus.",
            likesCount: 8,
        },
    ];
    let postElements = postData.map(pd =>
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