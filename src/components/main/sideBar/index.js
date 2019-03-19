import React,{Fragment} from 'react';
import classes from "./index.module.css";
import {NavLink} from "react-router-dom";
 const  SideBar = () => {
  return(
    <Fragment>
      <div  className={classes.sideBar}>
        <div><NavLink exact to="/profile">My Account</NavLink></div>
        <div><NavLink exact to="/messages">Message</NavLink></div>
        <div>Link 3</div>
        <div>Link 4</div>
        <div>Link 5</div>
        <div>Link 6</div>
        <div>Link 7</div>
      </div>
    </Fragment>
  )
}

export default SideBar;