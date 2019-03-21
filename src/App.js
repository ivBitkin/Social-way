import React, { Component }     from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Header                   from './components/header';
import Footer                   from './components/footer';
import Profile                  from './components/main/content/Profile';
import Dialogs                  from './components/main/content/Messages';
import SideBar                  from './components/main/sideBar';
import { addPost }              from './redux/state';
import state                    from './redux/state';


class App extends Component {

		render() {
				let { users, messages, feed } = state;
				return (
						<BrowserRouter>
								<div className="App">
										<Header name={'Social Name'}/>
										<div className="Main">
												<SideBar/>
												<Route path="/profile" render={() => <Profile profilePage={feed} addpost={addPost}/>}/>
												<Route path="/messages"
															 render={() => <Dialogs userDataState={users}
																											messagesDataState={messages}/>}/>
										</div>
										<Footer/>
								</div>
						</BrowserRouter>

				);
		}
}

export default App;
