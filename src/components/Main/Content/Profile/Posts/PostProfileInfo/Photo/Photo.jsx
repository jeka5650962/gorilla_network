import React from "react";
import style from "./Photo.module.scss";
import avaImg from "../../../ProfileInfo/ava.jpg";

const Photo = () => {
    return (
        <div className={style.profileInfo__photo}>
            <img src={avaImg} alt="Avatar"/>
        </div>
    );
};

export default Photo;