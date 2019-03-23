const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
    _state: {
        profilePage: {
            posts: [
                {message: 'Some Text Some Text Ivan'},
                {message: 'Some Text Some Text Bogdan'},
                {message: 'Some Text Some Text Ivan'},
                {message: 'Some Text Some Text Artur'},
                {message: 'Some Text Some Text Vlad'},
                {message: 'Some Text Some Text Diana'},
                {message: 'Some Text Some Text Anime'}
            ],
            newPostText: ''

        },
        dialogsPage: {
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
    },
    _callSubscriber() {
        console.log('state was changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;

    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newpost = {
                id: 25,
                message: this._state.profilePage.newPostText
            };
            this._state.profilePage.posts.push(newpost);
            this._state.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let newMessageText = this._state.dialogsPage.newMessageText;
            this._state.dialogsPage.newMessageText = '';
            this._state.dialogsPage.messages.push({message: newMessageText});
            this._callSubscriber(this._state);
        }
    }

};

export const addPostActionCreator = () => {

    return {
        type: ADD_POST
    };
};
export const updateNewPostTextActionCreator = (text) => {

    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    };
};

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

export default store;
window.store = store;