import React from "react";
import style from "./Profile.module.scss";
import AddPost from "./AddPost/AddPost";
import Post from "./Posts/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
// ---------------------------------------------------------------------------------------------------------------- Data

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
];
// -------------------------------------------------------------------------------------------------- компонента Profile
const Profile = () => {
    return (
        <div className={style.profileWrapper}>
            <ProfileInfo/>
            <AddPost/>
            <Post postMessage={postData[0].postMessage} likesCount={postData[0].likesCount}/>
            <Post postMessage={postData[1].postMessage} likesCount={postData[1].likesCount}/>
        </div>
    );
};

export default Profile;