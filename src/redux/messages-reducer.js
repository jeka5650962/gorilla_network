const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
    newMessageText: "",
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                message: state.newMessageText,
            };
            state.messagingMessageData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default messagesReducer;