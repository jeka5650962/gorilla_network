import React from "react";
import style from "./Content.module.scss";
import {Routes, Route} from "react-router-dom";
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import Friends from "./Friends/Friends";
import News from "./News/News";
import Music from "./Music/Music";

const Content = (props) => {
    return (
        <section className={style.content}>
            <div className={style.content__body}>
                <Routes>
                    <Route path="/profile" element={
                        <Profile
                            postData={props.postData}
                        />
                    }/>
                    <Route path="/messages/*" element={
                        <Messages
                            messagingPersonData={props.messagingPersonData}
                            messagingMessageData={props.messagingMessageData}
                        />
                    }/>
                    <Route path="/friends" element={
                        <Friends
                            friendsItemData={props.friendsItemData}
                        />
                    }/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                </Routes>
            </div>
        </section>
    );
};

export default Content;