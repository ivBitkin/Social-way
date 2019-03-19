import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Profile from './components/main/content/Profile';
import Dialogs from './components/main/content/Dialogs';
import SideBar from './components/main/sideBar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
       <Header name={"Ivan"} />
       <div className="Main">
       <SideBar />
       <Route path="/profile" component={Profile} />
        <Route path="/messages" component={Dialogs} />
        </div>
       <Footer />
      </div>
      </BrowserRouter>

    );
  }
}

export default App;
