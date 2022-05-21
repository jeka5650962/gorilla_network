import React from "react";
import style from "./Main.module.scss";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";
import {BrowserRouter as Router} from "react-router-dom";

const Main = () => {
    return (
        <Router>
            <main className={style.main}>
                <Sidebar/>
                <Content/>
            </main>
        </Router>
    );
};

export default Main;