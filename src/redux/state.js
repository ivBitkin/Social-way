import { messagesData, userData, feedData } from '../config/Temporary';

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
						newPostText: 'socialWay',


				},

				users      : userData,
				messages   : messagesData
				// feed    : feedData,
		},
		getState() {
				return this._state;
		},
		_callSubscriber() {
				console.log('state was changed');
		},
		addPost() {
				let newpost = {
						id     : 25,
						message: this._state.profilePage.newPostText
				};
				this._state.profilePage.posts.push(newpost);
				this._state.newPostText = '';
				this._callSubscriber(this._state);
		},
		updateNewPostText(newText) {
				this._state.profilePage.newPostText = newText;
				this._callSubscriber(this._state);
		},
		subscribe(observer) {
				this._callSubscriber = observer;

		}
};

export default store;
window.store = store;