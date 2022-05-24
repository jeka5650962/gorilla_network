import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ----------------------------------------------------------------------------- messagingPersonData
let messagingPersonData = [
    {
        id: "kuzin",
        name: "Kirill Kuzin",
        date: "May 20",
        urlPhoto: "https://media-exp1.licdn.com/dms/image/C4E03AQFkejP4VJ9jtw/profile-displayphoto-shrink_200_200/0/1580923016915?e=1658361600&v=beta&t=6BpIL7n1naN211Ijjrx0XvbFS7-iJQcbqKKojvHmjNg",
        lastMessage: "Here is the last message preview... First",
    },
    {
        id: "pul",
        name: "Slava Pul",
        date: "June 12",
        urlPhoto: "https://media-exp1.licdn.com/dms/image/C5603AQH-C_MVqmnmvg/profile-displayphoto-shrink_200_200/0/1572968995389?e=1658361600&v=beta&t=Bb9-1k3qEYL-pv8RY0_3WAkEAq7SbQvJ2Qq8nJJNmYY",
        lastMessage: "Here is the last message preview... Second",
    },
];
// ---------------------------------------------------------------------------- messagingMessageData
let messagingMessageData = [
    {
        message: "1. Cras accumsan accumsan hendrerit. Fusce feugiat metus dictum eros aliquet aliquam. Nulla facilisi. Proin euismod.",
    },
    {
        message: "2. In ullamcorper commodo odio, at facilisis erat pellentesque et. Aliquam rutrum laoreet dui, ac commodo.",
    },
    {
        message: "3. Morbi dictum vehicula ante bibendum semper. Praesent non nisi iaculis, efficitur neque non, tincidunt sem.",
    },
    {
        message: "4. Suspendisse mattis commodo dignissim. Quisque consequat leo aliquet ex hendrerit, quis vehicula lectus gravida. Aliquam.",
    },
];
// ---------------------------------------------------------------------------------------- postData
let postData = [
    {
        postMessage: "First post. Quisque leo urna, vulputate eget ipsum non, dignissim elementum lectus.",
        likesCount: 1988,
    },
    {
        postMessage: "Second post. Aliquam feugiat vestibulum tortor, non sagittis sem tempus at. Nulla.",
        likesCount: 2022,
    },
    {
        postMessage: "Third post. Vestibulum maximus eu erat vel venenatis. Praesent mattis vulputate risus.",
        likesCount: 8,
    },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App
            messagingPersonData={messagingPersonData}
            messagingMessageData={messagingMessageData}
            postData={postData}
        />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();