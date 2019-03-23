import React from 'react';

import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Profile from './components/main/content/Profile';
import Dialogs from './components/main/content/Messages';
import SideBar from './components/main/sideBar';
// import store                    from './redux/state';
import {BrowserRouter, Route} from 'react-router-dom';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header name={'Social Name'}/>
                <div className="Main">
                    <SideBar/>
                    <Route path="/profile"
                           render={() => <Profile posts={props.state.profilePage} dispatch={props.dispatch}/>}/>
                    <Route path="/messages"
                           render={() => <Dialogs store={props.store} userDataState={props.state.dialogsPage.users}
                                                  messagesDataState={props.state.dialogsPage.messages}
                                                  newMessageText={props.state.dialogsPage.newMessageText}/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>

    );
};

export default App;
