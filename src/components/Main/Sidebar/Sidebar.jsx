import React from "react";
import style from "./Sidebar.module.css";

const Sidebar = () => {
    return (
        <aside className={style.sidebar}>
            <nav className={style.sidebar__menu}>
                <ul className={style.sidebar__list}>
                    <li className={style.sidebar__item}>
                        <a href="/profile" className={`${style.sidebar__link} ${style.active}`}>Profile</a>
                    </li>
                    <li className={style.sidebar__item}>
                        <a href="/messages" className={style.sidebar__link}>Messages</a>
                    </li>
                    <li className={style.sidebar__item}>
                        <a href="/news" className={style.sidebar__link}>News</a>
                    </li>
                    <li className={style.sidebar__item}>
                        <a href="/music" className={style.sidebar__link}>Music</a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;