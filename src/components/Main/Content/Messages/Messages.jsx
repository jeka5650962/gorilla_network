import React from "react";
import style from "./Messages.module.scss";
import {NavLink} from "react-router-dom";

const Messages = () => {
    return (
        <div className={style.messages}>
            <div className={style.messages__body}>
                <div className={style.messages__topInfo}>Messaging</div>
                <div className={`${style.messages__mainInfo} ${style.message}`}>
                    <div className={style.message__left}>
                        <NavLink to="/messages/kuzin" className={navData => navData.isActive ? style.active : style.message__leftItem}>
                            <div className={style.message__profilePhoto}>
                                <img
                                    src="https://media-exp1.licdn.com/dms/image/C4E03AQFkejP4VJ9jtw/profile-displayphoto-shrink_200_200/0/1580923016915?e=1658361600&v=beta&t=6BpIL7n1naN211Ijjrx0XvbFS7-iJQcbqKKojvHmjNg"
                                    alt="Photo"/>
                            </div>
                            <div className={style.message__profileInfo}>
                                <div className={style.message__nameAndDate}>
                                    <div className={style.message__name}>Kirill Kuzin</div>
                                    <div className={style.message__date}>May 20</div>
                                </div>
                                <div className={style.message__lastMessage}>
                                    Here is the last message preview...
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to="/messages/pul" className={navData => navData.isActive ? style.active : style.message__leftItem}>
                            <div className={style.message__profilePhoto}>
                                <img
                                    src="https://media-exp1.licdn.com/dms/image/C5603AQH-C_MVqmnmvg/profile-displayphoto-shrink_200_200/0/1572968995389?e=1658361600&v=beta&t=Bb9-1k3qEYL-pv8RY0_3WAkEAq7SbQvJ2Qq8nJJNmYY"
                                    alt="Photo"/>
                            </div>
                            <div className={style.message__profileInfo}>
                                <div className={style.message__nameAndDate}>
                                    <div className={style.message__name}>Slava Pul</div>
                                    <div className={style.message__date}>June 12</div>
                                </div>
                                <div className={style.message__lastMessage}>
                                    Here is the last message preview...
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className={style.message__right}>
                        <div className={style.message__sentMessages}>
                            <div className={style.message__items}>
                                <div className={style.message__item}>
                                    Sodales amet, id cras dictum. Non pellentesque lectus amet in mollis dui nec in in
                                    quam,
                                    odio. Luctus tempus cursu.
                                </div>
                            </div>
                            <div className={style.message__items}>
                                <div className={style.message__item}>
                                    Sodales amet, id cras dictum. Non pellentesque lectus amet in mollis dui nec in in
                                    quam,
                                    odio. Luctus tempus cursu.
                                </div>
                            </div>
                            <div className={style.message__items}>
                                <div className={style.message__item}>
                                    Sodales amet, id cras dictum. Non pellentesque lectus amet in mollis dui nec in in
                                    quam,
                                    odio. Luctus tempus cursu.
                                </div>
                            </div>
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