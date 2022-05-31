import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = (props) => {
    return (
        <div className="wrapper">
            <div className="container">
                <Header/>
                <Main
                    friendsItemData={props.state.friendsItemData}
                    messagingPersonData={props.state.messagingPersonData}
                    messagingMessageData={props.state.messagingMessageData}
                    postData={props.state.postData}
                    addPost={props.addPost}
                    addMessage={props.addMessage}
                    newPostText={props.state.newPostText}
                    updateNewPostText={props.updateNewPostText}
                    newMessageText={props.state.newMessageText}
                    updateNewMessageText={props.updateNewMessageText}
                />
                <Footer/>
            </div>
        </div>
    );
};

export default App;