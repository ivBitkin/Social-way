const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    users: [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Bogdan'},
        {id: 3, name: 'Ivan'},
        {id: 4, name: 'Artur'},
        {id: 5, name: 'Vlad'},
        {id: 6, name: 'Diana'},
        {id: 7, name: 'Anime'}
    ],
    messages: [
        {message: 'Some Text Some Text Ivan'},
        {message: 'Some Text Some Text Bogdan'},
        {message: 'Some Text Some Text Ivan'},
        {message: 'Some Text Some Text Artur'},
        {message: 'Some Text Some Text Vlad'},
        {message: 'Some Text Some Text Diana'},
        {message: 'Some Text Some Text Anime'}
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.body;
            return state;
        case SEND_MESSAGE:
            let newMessageText = state.newMessageText;
            state.newMessageText = '';
            state.messages.push({message: newMessageText});
            return state;
        default:
            return state;
    }


}


export const sendMessageCreator = () => {

    return {
        type: SEND_MESSAGE
    };
};
export const updateNewTextMessageCreator = (body) => {

    return {
        type: UPDATE_NEW_MESSAGE_TEXT, body: body
    };
};

export default dialogsReducer;
