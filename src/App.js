import React                    from 'react';

import './App.css';
import Header                   from './components/header';
import Footer                   from './components/footer';
import Profile                  from './components/main/content/Profile';
import Dialogs                  from './components/main/content/Messages';
import SideBar                  from './components/main/sideBar';
// import store                    from './redux/state';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
		return (
				<BrowserRouter>
						<div className="App">
								<Header name={'Social Name'}/>
								<div className="Main">
										<SideBar/>
										<Route path="/profile"
													 render={() => <Profile posts={props.state.profilePage} addPost={props.addPost}
																									updateNewPostText={props.updateNewPostText}/>}/>
										{/*<Route path="/messages"*/}
										{/*render={() => <Dialogs userDataState={"users"}*/}
										{/*messagesDataState={"messages"}/>}/>*/}
								</div>
								<Footer/>
						</div>
				</BrowserRouter>

		);
};

export default App;
