import React, { Fragment } from 'react';
import classes from "./index.module.css";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <Fragment>
      <div className={classes.sideBar}>
        <NavLink exact to="/profile" activeClassName={classes.ActiveLink}><div className={classes.nav}>My Account</div></NavLink>
        <NavLink exact to="/messages" activeClassName={classes.ActiveLink}><div className={classes.nav}>Message</div></NavLink>
        <NavLink><div className={classes.nav}>Link 3</div></NavLink>
        <NavLink><div className={classes.nav}>Link 4</div></NavLink>
        <NavLink><div className={classes.nav}>Link 5</div></NavLink>
        <NavLink><div className={classes.nav}>Link 6</div></NavLink>
        <NavLink><div className={classes.nav}>Link 7</div></NavLink>
      </div>
    </Fragment>
  )
}

export default SideBar;