import React from "react";
import style from "./Sidebar.module.scss";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className={style.sidebar}>
            <nav className={style.sidebar__menu}>
                <ul className={style.sidebar__list}>
                    <li className={style.sidebar__item}>
                        <NavLink to="/profile" className = {navData => navData.isActive ? style.active : style.sidebar__link}>Profile</NavLink>
                    </li>
                    <li className={style.sidebar__item}>
                        <NavLink to="/messages" className = {navData => navData.isActive ? style.active : style.sidebar__link}>Messages</NavLink>
                    </li>
                    <li className={style.sidebar__item}>
                        <NavLink to="/friends" className = {navData => navData.isActive ? style.active : style.sidebar__link}>Friends</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;