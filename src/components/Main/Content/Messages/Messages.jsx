import React from "react";
import style from "./Messages.module.scss";

const Messages = () => {
    return (
        <div className={style.messages}>
            <div className={style.messages__body}>
                <div className={style.messages__topInfo}>Messaging</div>
                <div className={`${style.messages__mainInfo} ${style.message}`}>
                    <div className={style.message__left}>
                        <div className={style.message__leftItem}>
                            <div className={style.message__profilePhoto}>
                                <img
                                    src="https://media-exp1.licdn.com/dms/image/C4D03AQGP5l7bQHqE6A/profile-displayphoto-shrink_200_200/0/1633726581090?e=1657756800&v=beta&t=fISZxc6Jmt1lC2p18tlw-FUiEIVCVNojRFLR98C8y_o"
                                    alt="Photo"/>
                            </div>
                            <div className={style.message__profileInfo}>
                                <div className={style.message__nameAndDate}>
                                    <div className={style.message__name}>Yauheni Salish</div>
                                    <div className={style.message__date}>May 20</div>
                                </div>
                                <div className={style.message__lastMessage}>
                                    Here is the last message preview...
                                </div>
                            </div>
                        </div>
                        <div className={style.message__leftItem}>
                            <div className={style.message__profilePhoto}>
                                <img
                                    src="https://media-exp1.licdn.com/dms/image/C4D03AQGP5l7bQHqE6A/profile-displayphoto-shrink_200_200/0/1633726581090?e=1657756800&v=beta&t=fISZxc6Jmt1lC2p18tlw-FUiEIVCVNojRFLR98C8y_o"
                                    alt="Photo"/>
                            </div>
                            <div className={style.message__profileInfo}>
                                <div className={style.message__nameAndDate}>
                                    <div className={style.message__name}>Yauheni Salish</div>
                                    <div className={style.message__date}>May 20</div>
                                </div>
                                <div className={style.message__lastMessage}>
                                    Here is the last message preview...
                                </div>
                            </div>
                        </div>
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