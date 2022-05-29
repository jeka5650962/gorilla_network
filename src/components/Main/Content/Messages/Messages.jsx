import React, {useRef} from "react";
import style from "./Messages.module.scss";
import MessagingPerson from "./MessagingPerson/MessagingPerson";
import MessagingMessage from "./MessagingMessage/MessagingMessage";

const Messages = (props) => {

    /* ------------------------------------------------------------------------------------ метод map */

    let messagingPersonElements = props.messagingPersonData.map(mpd =>
        <MessagingPerson
            id={mpd.id}
            name={mpd.name}
            date={mpd.date}
            urlPhoto={mpd.urlPhoto}
            lastMessage={mpd.lastMessage}
        />
    );

    let messagingMessageElements = props.messagingMessageData.map(mmd =>
        <MessagingMessage
            message={mmd.message}
        />
    );

    /* ----------------------------------------------------------------------------------- addMessage */

    let newMessageElement = useRef(null);

    let addMessage = () => {
        let text = newMessageElement.current.value;
        props.addMessage(text);
    };

    /* --------------------------------------------------------------------------------------- return */

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
                                <textarea ref={newMessageElement} name="text"></textarea>
                            </div>
                            <a href="#" onClick={addMessage} className={style.message__button}>Send</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Messages;