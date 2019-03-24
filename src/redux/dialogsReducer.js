const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = "SEND-MESSAGE";


const dialogsReducer = (state, action) => {

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
