import React from "react";
import style from "./Messages.module.scss";
import MessagingPerson from "./MessagingPerson/MessagingPerson";
import MessagingMessage from "./MessagingMessage/MessagingMessage";

const Messages = () => {
    return (
        <div className={style.messages}>
            <div className={style.messages__body}>
                <div className={style.messages__topInfo}>Messaging</div>
                <div className={`${style.messages__mainInfo} ${style.message}`}>
                    <div className={style.message__left}>
                        <MessagingPerson id="kuzin"
                                         name="Kirill Kuzin"
                                         date="May 20"
                                         urlPhoto="https://media-exp1.licdn.com/dms/image/C4E03AQFkejP4VJ9jtw/profile-displayphoto-shrink_200_200/0/1580923016915?e=1658361600&v=beta&t=6BpIL7n1naN211Ijjrx0XvbFS7-iJQcbqKKojvHmjNg"
                                         lastMessage="Here is the last message preview... First"
                        />
                        <MessagingPerson id="pul"
                                         name="Slava Pul"
                                         date="June 12"
                                         urlPhoto="https://media-exp1.licdn.com/dms/image/C5603AQH-C_MVqmnmvg/profile-displayphoto-shrink_200_200/0/1572968995389?e=1658361600&v=beta&t=Bb9-1k3qEYL-pv8RY0_3WAkEAq7SbQvJ2Qq8nJJNmYY"
                                         lastMessage="Here is the last message preview... Second"
                        />
                    </div>
                    <div className={style.message__right}>
                        <div className={style.message__sentMessages}>
                            <MessagingMessage
                                message="Организации, активности рост и заданий идейные модель интересный собой рамки реализация требуют организационной задача"
                            />
                            <MessagingMessage
                                message="Идейные условий способствует а и порядка, дальнейших заданий и важную нашей позиций, нашей способствует постоянны"
                            />
                            <MessagingMessage
                                message="От деятельности плановых сложившаяся порядка, постоянный количественный организации, повседневная кадров позиций, способствует повседневная задач. Направлени"
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