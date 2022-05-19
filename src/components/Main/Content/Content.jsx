import React from "react";
import style from "./Content.module.css";
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import News from "./News/News";
import Music from "./Music/Music";
import {Routes, Route} from "react-router-dom";

const Content = () => {
    return (
        <section className={style.content}>
            <div className={style.content__body}>
                <Routes>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/messages" element={<Messages/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                </Routes>
            </div>
        </section>
    );
};

export default Content;