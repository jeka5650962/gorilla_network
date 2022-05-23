import React from "react";
import style from "./Messages.module.scss";
import MessagingPerson from "./MessagingPerson/MessagingPerson";
import MessagingMessage from "./MessagingMessage/MessagingMessage";

const Messages = () => {

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
    let messagingPersonElements = messagingPersonData.map(mpd =>
        <MessagingPerson
            id={mpd.id}
            name={mpd.name}
            date={mpd.date}
            urlPhoto={mpd.urlPhoto}
            lastMessage={mpd.lastMessage}
        />);
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
        {
            message: "4. Suspendisse mattis commodo dignissim. Quisque consequat leo aliquet ex hendrerit, quis vehicula lectus gravida. Aliquam.",
        },
    ];
    let messagingMessageElements = messagingMessageData.map(mmd =>
        <MessagingMessage
            message={mmd.message}
        />);

    return (
        <div className={style.messages}>
            <div className={style.messages__body}>
                <div className={style.messages__topInfo}>Messaging</div>
                <div className={`${style.messages__mainInfo} ${style.message}`}>
                    <div className={style.message__left}>
                        {messagingPersonElements}
                    </div>
                    <div className={style.message__right}>
                        <div className={style.message__sentMessages}>
                            {messagingMessageElements}
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