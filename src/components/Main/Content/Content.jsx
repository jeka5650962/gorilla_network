import React from "react";
import style from "./Content.module.css";
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";

const Content = () => {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
};

export default Content;