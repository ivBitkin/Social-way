import { messagesData, userData, feedData } from '../config/Temporary';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
		_state: {
				profilePage: {
						posts      : [
								{ message: 'Some Text Some Text Ivan' },
								{ message: 'Some Text Some Text Bogdan' },
								{ message: 'Some Text Some Text Ivan' },
								{ message: 'Some Text Some Text Artur' },
								{ message: 'Some Text Some Text Vlad' },
								{ message: 'Some Text Some Text Diana' },
								{ message: 'Some Text Some Text Anime' }
						],
						newPostText: 'socialWay'

				},

				users   : userData,
				messages: messagesData
				// feed    : feedData,
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
								id     : 25,
								message: this._state.profilePage.newPostText
						};
						this._state.profilePage.posts.push(newpost);
						this._state.newPostText = '';
						this._callSubscriber(this._state);
				} else if (action.type === 'UPDATE-NEW-POST-TEXT') {
						this._state.profilePage.newPostText = action.newText;
						this._callSubscriber(this._state);
				}
		}

};

export const addPostActionCreator           = () => {

		return {
				type: ADD_POST
		};
};
export const updateNewPostTextActionCreator = (text) => {

		return {
				type: UPDATE_NEW_POST_TEXT, newText: text
		};
};

export default store;
window.store = store;