import React from 'react';
import classes             from './index.module.css';
import { NavLink }         from 'react-router-dom';

export const Users = (props) => {

		let path = '/messages/' + props.id;
		return (<NavLink className={classes.aLink} activeClassName={classes.aActive} exact to={path}>
				<div className={classes.userItem}>{props.name}</div>
		</NavLink>);
};