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
                            newPostText={props.newPostText}
                            dispatch={props.dispatch}
                        />
                    }/>
                    <Route path="/messages/*" element={
                        <Messages
                            messagingPersonData={props.messagingPersonData}
                            messagingMessageData={props.messagingMessageData}
                            newMessageText={props.newMessageText}
                            dispatch={props.dispatch}
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