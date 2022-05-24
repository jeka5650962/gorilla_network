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
                    messagingPersonData={props.messagingPersonData}
                    messagingMessageData={props.messagingMessageData}
                    postData={props.postData}
                />
                <Footer/>
            </div>
        </div>
    );
};

export default App;