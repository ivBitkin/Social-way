import * as serviceWorker from './serviceWorker';
import React              from 'react';
import ReactDOM           from 'react-dom';
import './index.css';
import App                from './App';
import store              from './redux/state';

let rerenderMain = (state) => {
		ReactDOM.render(<App state={store.getState()} addPost={store.addPost.bind(store)}
												 updateNewPostText={store.updateNewPostText.bind(store)}/>, document.getElementById('root'));
};
rerenderMain(store.getState());
store.subscribe(rerenderMain);
serviceWorker.unregister();