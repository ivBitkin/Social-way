import React, { Fragment } from 'react';
import Post                from './Posts';
import classes             from './index.module.css';
import { NavLink }         from 'react-router-dom';

const DialogItem = (props) => {
		let path = '/messages/' + props.id;
		return (<NavLink className={classes.aLink} activeClassName={classes.aActive} exact to={path}>
				<div className={classes.userItem}>{props.name}</div>
		</NavLink>);
};

const Dialogs = () => {

		let userData = [
				{ id: 1, name: 'Ivan' },
				{ id: 2, name: 'Bogdan' },
				{ id: 3, name: 'Ivan' },
				{ id: 4, name: 'Artur' },
				{ id: 5, name: 'Vlad' },
				{ id: 6, name: 'Diana' },
				{ id: 7, name: 'Anime' }
		];
		let usersElements = userData.map(user => {
				return(<DialogItem name={user.name} id={user.id}/>)
		});

		let messagesData = [
				{  message: 'Some Text Some Text Ivan' },
				{  message: 'Some Text Some Text Bogdan' },
				{  message: 'Some Text Some Text Ivan' },
				{  message: 'Some Text Some Text Artur' },
				{  message: 'Some Text Some Text Vlad' },
				{  message: 'Some Text Some Text Diana' },
				{  message: 'Some Text Some Text Anime' }
		];
		let dialogsElements = messagesData.map(dialog => {
				return(<Post message={dialog.message} />)
		});

		return (
				<Fragment>

						<div className={classes.gridDialogs}>
								<div className={classes.users}>
										<h1>Users</h1>
										{usersElements}
								</div>
								<div className={classes.dialogs}>
										<h1>Dialogs</h1>
										{dialogsElements}
								</div>
						</div>
				</Fragment>
		);
};

export default Dialogs;