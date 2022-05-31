import React from "react";
import style from "./Content.module.scss";
import {Routes, Route} from "react-router-dom";
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import Friends from "./Friends/Friends";

const Content = (props) => {
    return (
        <section className={style.content}>
            <div className={style.content__body}>
                <Routes>
                    <Route path="/profile" element={
                        <Profile
                            postData={props.postData}
                            addPost={props.addPost}
                            newPostText={props.newPostText}
                            updateNewPostText={props.updateNewPostText}
                        />
                    }/>
                    <Route path="/messages/*" element={
                        <Messages
                            messagingPersonData={props.messagingPersonData}
                            messagingMessageData={props.messagingMessageData}
                            addMessage={props.addMessage}
                            newMessageText={props.newMessageText}
                            updateNewMessageText={props.updateNewMessageText}
                        />
                    }/>
                    <Route path="/friends" element={
                        <Friends
                            friendsItemData={props.friendsItemData}
                        />
                    }/>
                </Routes>
            </div>
        </section>
    );
};

export default Content;