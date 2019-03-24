import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/reduxStore';

let rerenderMain = (state) => {
    ReactDOM.render(<App state={store.getState()}
                         dispatch={store.dispatch.bind(store)}
        store={store}/>,
        document.getElementById('root'));
};
rerenderMain(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderMain(state);
});
serviceWorker.unregister();