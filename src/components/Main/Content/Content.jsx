import React from "react";
import style from "./Content.module.css";
import Profile from "./Profile/Profile";

const Content = () => {
    return (
        <section className={style.content}>
            <div className={style.content__body}>
                <Profile/>
            </div>
        </section>
    );
};

export default Content;