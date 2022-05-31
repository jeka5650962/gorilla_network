import React from "react";
import style from "./Main.module.scss";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";

const Main = (props) => {
    return (
        <main className={style.main}>
            <Sidebar/>
            <Content
                friendsItemData={props.friendsItemData}
                messagingPersonData={props.messagingPersonData}
                messagingMessageData={props.messagingMessageData}
                postData={props.postData}
                addPost={props.addPost}
                addMessage={props.addMessage}
                newPostText={props.newPostText}
                updateNewPostText={props.updateNewPostText}
                newMessageText={props.newMessageText}
                updateNewMessageText={props.updateNewMessageText}
            />
        </main>
    );
};

export default Main;