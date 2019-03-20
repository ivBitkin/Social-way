import React, { Fragment } from 'react';
import classes             from './index.module.css';
import { NavLink }         from 'react-router-dom';

const SideBar = () => {
		return (
				<Fragment>
						<div className={classes.sideBar}>
								<div>
										<NavLink exact to="/profile" activeClassName={classes.ActiveLink}>
												<div className={classes.nav}>My Account</div>
										</NavLink>
										<NavLink exact to="/messages" activeClassName={classes.ActiveLink}>
												<div className={classes.nav}>Message</div>
										</NavLink>
										<NavLink to="#">
												<div className={classes.nav}>Link 3</div>
										</NavLink>
										<NavLink to="#">
												<div className={classes.nav}>Link 4</div>
										</NavLink>
										<NavLink to="#">
												<div className={classes.nav}>Link 5</div>
										</NavLink>
										<NavLink to="#">
												<div className={classes.nav}>Link 6</div>
										</NavLink>
										<NavLink to="#">
												<div className={classes.nav}>Link 7</div>
										</NavLink>
								</div>
								<div>
										<h1>Friends</h1>
										<div className={classes.gridFriends}>
												<div>1</div>
												<div>2</div>
												<div>3</div>
												<div>1</div>
												<div>2</div>
												<div>3</div>
												<div>1</div>
												<div>2</div>
												<div>3</div>
										</div>
								</div>
						</div>
				</Fragment>
		);
};

export default SideBar;