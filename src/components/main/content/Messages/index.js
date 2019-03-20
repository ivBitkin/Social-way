import React, { Fragment } from 'react';
import Post                from './Posts';
import classes             from './index.module.css';
import { Users }           from './Users/Users';


const Dialogs = (props) => {
		let {userDataState, messagesDataState} = props;

		let usersElements = userDataState.map((user, id) => {
				return (<Users key={id} name={user.name} id={user.id}/>);
		});

		let dialogsElements = messagesDataState.map((dialog, id) => {
				return (<Post key={id} message={dialog.message}/>);
		});

		return (
				<Fragment>
						<div className={classes.gridDialogs}>
								<div className={classes.users}>
										<h1>Users</h1>
										{usersElements}
								</div>
								<div className={classes.dialogs}>
										<h1>Chat</h1>
										{dialogsElements}
								</div>
						</div>
				</Fragment>
		);
};

export default Dialogs;