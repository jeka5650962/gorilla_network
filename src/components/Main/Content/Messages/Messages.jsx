import React from "react";
import style from "./Messages.module.scss";
import {NavLink} from "react-router-dom";
// ---------------------------------------------------------------------------------------------------------------- Data

// ----------------------------------------------------------------------------- messagingPersonData
let messagingPersonData = [
    {
        id: "kuzin",
        name: "Kirill Kuzin",
        date: "May 20",
        urlPhoto: "https://media-exp1.licdn.com/dms/image/C4E03AQFkejP4VJ9jtw/profile-displayphoto-shrink_200_200/0/1580923016915?e=1658361600&v=beta&t=6BpIL7n1naN211Ijjrx0XvbFS7-iJQcbqKKojvHmjNg",
        lastMessage: "Here is the last message preview... First",
    },
    {
        id: "pul",
        name: "Slava Pul",
        date: "June 12",
        urlPhoto: "https://media-exp1.licdn.com/dms/image/C5603AQH-C_MVqmnmvg/profile-displayphoto-shrink_200_200/0/1572968995389?e=1658361600&v=beta&t=Bb9-1k3qEYL-pv8RY0_3WAkEAq7SbQvJ2Qq8nJJNmYY",
        lastMessage: "Here is the last message preview... Second",
    },
];
// ---------------------------------------------------------------------------- messagingMessageData
let messagingMessageData = [
    {
        message: "1. Cras accumsan accumsan hendrerit. Fusce feugiat metus dictum eros aliquet aliquam. Nulla facilisi. Proin euismod.",
    },
    {
        message: "2. In ullamcorper commodo odio, at facilisis erat pellentesque et. Aliquam rutrum laoreet dui, ac commodo.",
    },
    {
        message: "3. Morbi dictum vehicula ante bibendum semper. Praesent non nisi iaculis, efficitur neque non, tincidunt sem.",
    },
];
// --------------------------------------------------------------------------------------- подкомпонента MessagingPerson
const MessagingPerson = (props) => {

    let path = "/messages/" + props.id;

    return (
        <NavLink to={path} className={navData => navData.isActive ? style.active : style.message__leftItem}>
            <div className={style.message__profilePhoto}>
                <img
                    src={props.urlPhoto}
                    alt="Photo"/>
            </div>
            <div className={style.message__profileInfo}>
                <div className={style.message__nameAndDate}>
                    <div className={style.message__name}>{props.name}</div>
                    <div className={style.message__date}>{props.date}</div>
                </div>
                <div className={style.message__lastMessage}>
                    {props.lastMessage}
                </div>
            </div>
        </NavLink>
    );
};
// -------------------------------------------------------------------------------------- подкомпонента MessagingMessage
const MessagingMessage = (props) => {
    return (
        <div className={style.message__items}>
            <div className={style.message__item}>
                {props.message}
            </div>
        </div>
    );
};
// ------------------------------------------------------------------------------------------------- компонента Messages
const Messages = () => {
    return (
        <div className={style.messages}>
            <div className={style.messages__body}>
                <div className={style.messages__topInfo}>Messaging</div>
                <div className={`${style.messages__mainInfo} ${style.message}`}>
                    <div className={style.message__left}>
                        <MessagingPerson id={messagingPersonData[0].id}
                                         name={messagingPersonData[0].name}
                                         date={messagingPersonData[0].date}
                                         urlPhoto={messagingPersonData[0].urlPhoto}
                                         lastMessage={messagingPersonData[0].lastMessage}
                        />
                        <MessagingPerson id={messagingPersonData[1].id}
                                         name={messagingPersonData[1].name}
                                         date={messagingPersonData[1].date}
                                         urlPhoto={messagingPersonData[1].urlPhoto}
                                         lastMessage={messagingPersonData[1].lastMessage}
                        />
                    </div>
                    <div className={style.message__right}>
                        <div className={style.message__sentMessages}>
                            <MessagingMessage
                                message={messagingMessageData[0].message}
                            />
                            <MessagingMessage
                                message={messagingMessageData[1].message}
                            />
                            <MessagingMessage
                                message={messagingMessageData[2].message}
                            />
                        </div>
                        <div className={style.message__writeMessage}>
                            <div className={style.message__textarea}>
                                <textarea name="text"></textarea>
                            </div>
                            <a className={style.message__button}>Send</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Messages;