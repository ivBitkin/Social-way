import React, { Fragment } from 'react';
import classes             from './index.module.css';
import Feed                from './Feed';
import ProfileInfo         from './ProfileInfo';

const Profile = (props) => {
		return (
				<Fragment>
						<div className={classes.Block}>
								<ProfileInfo/>
								<Feed profilePage={props.posts}  dispatch={props.dispatch}/>
						</div>
				</Fragment>
		);
};

export default Profile;