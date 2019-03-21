import * as serviceWorker from './serviceWorker';
import state          from './redux/state';
import React              from 'react';
import ReactDOM           from 'react-dom';
import './index.css';
import App                from './App';


 let rerenderMain = () => {
		ReactDOM.render(<App />, document.getElementById('root'));
};
rerenderMain(state)
serviceWorker.unregister();