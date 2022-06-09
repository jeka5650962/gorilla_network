const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        friendsItemData: [
            {
                image: "https://media-exp1.licdn.com/dms/image/C4D16AQEwdQn8yQEzzw/profile-displaybackgroundimage-shrink_200_800/0/1641326323018?e=1658966400&v=beta&t=oYPap9AKWd1oxKr9U5c-DgSf033x3WSQHpzwdW9Nzbs",
                photo: "https://media-exp1.licdn.com/dms/image/C4E03AQGssNInchz5MA/profile-displayphoto-shrink_200_200/0/1652434280971?e=1658966400&v=beta&t=8iyV--k2Stt0v8sc16dhHci4GPmP4RlYRCxWv0UwEIA",
                name: "Hanna Shamelo",
                description: "HR Manager - Exadel Inc.",
            },
            {
                image: "https://media-exp1.licdn.com/dms/image/C5616AQEPiXQUl1smhw/profile-displaybackgroundimage-shrink_200_800/0/1583159091307?e=1658966400&v=beta&t=IvxRtWoG1eIPUaXJvTcBp9dioSsKFkMXz96TW3qJCbo",
                photo: "https://media-exp1.licdn.com/dms/image/C5603AQFJ8Z5RzcY-Ng/profile-displayphoto-shrink_200_200/0/1583158539184?e=1658966400&v=beta&t=vcKHeOJ2FCxMMWHtvi2xt08RoVf_ejQMY96bGvhtsMg",
                name: "Olya Ustimenko",
                description: "IT recruiter - SOFTCORP",
            },
            {
                image: "https://media-exp1.licdn.com/dms/image/C4E16AQFoOwqqm4evdw/profile-displaybackgroundimage-shrink_200_800/0/1648887867273?e=1658966400&v=beta&t=inKK5m3GHR6IXbZymQkCUCm8xhQ_4WJKeybxQUee4qs",
                photo: "https://media-exp1.licdn.com/dms/image/C4D03AQH3jIRGxKEG3w/profile-displayphoto-shrink_200_200/0/1640073056454?e=1658966400&v=beta&t=ISksEkBVvdJiXB__qgc5bP1aOL-ZDbR0azSch_ddxQo",
                name: "Julia E.",
                description: "Team Lead of Recruitment Team",
            },
            {
                image: "https://media-exp1.licdn.com/dms/image/C4E16AQFt__wJlMhLtw/profile-displaybackgroundimage-shrink_200_800/0/1616689904976?e=1658966400&v=beta&t=mH94WiqGWH-rwKJ3oz7fC6wPYdOprBxdAbcCMRxHlDE",
                photo: "https://media-exp1.licdn.com/dms/image/C4E03AQEh2qz-TPjAsQ/profile-displayphoto-shrink_200_200/0/1620974931825?e=1658966400&v=beta&t=77YWneIELMvChxuAC2DQcAACG3-rCF8agOeHFQpYEuA",
                name: "Katrin Averina",
                description: "IT Recruiter – Sherloks-Team.Looking for 🔎 Game Designer",
            },
            {
                image: "https://media-exp1.licdn.com/dms/image/C4E16AQG545lSL25IGA/profile-displaybackgroundimage-shrink_200_800/0/1624815092762?e=1658966400&v=beta&t=mJND5j7wC8W2sC1ROA2DWHB_Wtk88b9KTrJnxMuJs2o",
                photo: "https://media-exp1.licdn.com/dms/image/C4D03AQEd-apUrrSwxw/profile-displayphoto-shrink_200_200/0/1643617136230?e=1658966400&v=beta&t=09kmjInpakXcUbYf1VlzT2EriZ_ta-yl14HmEJrzLcU",
                name: "Nimra Zahid",
                description: "Sr. Software Quality Assurance Engineer at SSI | Certified Tester™ | Scrum Fundamental Certified™",
            },
        ],
        messagingPersonData: [
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
        ],
        messagingMessageData: [
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
        ],
        postData: [
            {
                postMessage: "First post. Quisque leo urna, vulputate eget ipsum non, dignissim elementum lectus.",
                likesCount: 1988,
            },
            {
                postMessage: "Second post. Aliquam feugiat vestibulum tortor, non sagittis sem tempus at. Nulla.",
                likesCount: 2022,
            },
        ],
        newPostText: "Jeka Yauheni Salish",
        newMessageText: "5. Sed ac facilisis ante. Ut viverra, massa ac facilisis sollicitudin.",
    },
    _callSubscriber() {
        console.log('State is changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                postMessage: this._state.newPostText,
                likesCount: 0,
            };
            this._state.postData.push(newPost);
            this._state.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                message: this._state.newMessageText,
            };
            this._state.messagingMessageData.push(newMessage);
            this._state.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    },
};

/* ------------------------------------------------------------------------------------------------- ↓ action creator */

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

/* ------------------------------------------------------------------------------------------------- ↑ action creator */

export default store;

window.store = store;