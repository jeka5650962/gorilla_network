import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.scss';
import App from './App';
import {addMessage, addPost} from "./redux/state";

export let rerenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={addPost}
                    addMessage={addMessage}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
};