import React from "react";
import style from "./Main.module.css";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

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