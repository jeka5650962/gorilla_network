import React from "react";
import style from "./Content.module.css";
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import News from "./News/News";
import Music from "./Music/Music";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const Content = () => {
    return (
        <Router>
            <section className={style.content}>
                <div className={style.content__body}>
                    <Switch>
                        <Route path="/profile"><Profile/></Route>
                        <Route path="/messages"><Messages/></Route>
                        <Route path="/news"><News/></Route>
                        <Route path="/music"><Music/></Route>
                    </Switch>
                </div>
            </section>
        </Router>
    );
};

export default Content;