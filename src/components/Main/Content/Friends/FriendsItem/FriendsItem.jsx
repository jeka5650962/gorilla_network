import React from "react";
import style from "../Friends.module.scss";

const FriendsItem = (props) => {
    return (
        <div className={style.friends__column}>
            <div className={style.friends__item}>
                <div className={style.friends__image}><img src={props.image} alt="image"/></div>
                <div className={style.friends__photo}><img src={props.photo} alt="ava"/></div>
                <div className={style.friends__name}>{props.name}</div>
                <div className={style.friends__description}>{props.description}</div>
                <a href="#" className={style.friends__button}>Send message</a>
            </div>
        </div>
    );
};

export default FriendsItem;