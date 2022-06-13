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
                    friendsItemData={props.state.friendsPage.friendsItemData}
                    messagingPersonData={props.state.messagesPage.messagingPersonData}
                    messagingMessageData={props.state.messagesPage.messagingMessageData}
                    postData={props.state.profilePage.postData}
                    newPostText={props.state.profilePage.newPostText}
                    newMessageText={props.state.messagesPage.newMessageText}
                    dispatch={props.dispatch}
                />
                <Footer/>
            </div>
        </div>
    );
};

export default App;