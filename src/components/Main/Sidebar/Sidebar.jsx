import React from "react";
import style from "./Sidebar.module.scss";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className={style.sidebar}>
            <nav className={style.sidebar__menu}>
                <ul className={style.sidebar__list}>
                    <li className={style.sidebar__item}>
                        <NavLink to="/profile"
                                 className={`${style.sidebar__link} ${style.active}`}>Profile</NavLink>
                    </li>
                    <li className={style.sidebar__item}>
                        <NavLink to="/messages" className={style.sidebar__link}>Messages</NavLink>
                    </li>
                    <li className={style.sidebar__item}>
                        <NavLink to="/news" className={style.sidebar__link}>News</NavLink>
                    </li>
                    <li className={style.sidebar__item}>
                        <NavLink to="/music" className={style.sidebar__link}>Music</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;