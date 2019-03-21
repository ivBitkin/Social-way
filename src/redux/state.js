import { messagesData, userData, feedData } from '../config/Temporary';

 export let state = {
		users   : userData,
		messages: messagesData,
		feed    : feedData
};

  let rerenderMain = (state) => {
 		console.log("state was changed")
 }

 export let addPost = (postMessage) => {
		let newpost = {
				id     : 25,
				message: postMessage
		};
		state.feed.push(newpost);
		 rerenderMain(state);
};

  export const subscribe = (observer) => {

}

export default state;