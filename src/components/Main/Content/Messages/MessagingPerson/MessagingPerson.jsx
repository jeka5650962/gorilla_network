import React from "react";
import style from "../Messages.module.scss";
import {NavLink} from "react-router-dom";

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

export default MessagingPerson;