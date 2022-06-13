const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const messagesReducer = (state, action) => {

    if (action.type === ADD_MESSAGE) {
        let newMessage = {
            message: state.newMessageText,
        };
        state.messagingMessageData.push(newMessage);
        state.newMessageText = '';
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newText;
    }

    return state;
};

export default messagesReducer;