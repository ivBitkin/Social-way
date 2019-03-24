import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import {navigationReducer} from "./navigationReducer";



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
        },
        navigation: {

        },
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navigation = navigationReducer(this._state.navigation, action);

        this._callSubscriber(this._state);


    }

};




export default store;
window.store = store;